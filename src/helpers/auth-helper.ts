import * as constants from '../constants';
import * as msTeams from '@microsoft/teams-js';
import AuthenticationContext from 'adal-angular';

const authenticationContext = new AuthenticationContext({
    clientId: constants.Auth.appId,
    redirectUri: `${window.location.origin}/${constants.Auth.signInEndPage}`,
    cacheLocation: constants.Auth.cacheLocation as 'localStorage' | 'sessionStorage',
    endpoints: constants.Auth.authenticatedDomains,
    navigateToLoginRequestUrl: false
});

export default class AuthHelper {
    /**
     * Uses the current authetication context to check if a user
     * is logged in. In this case, this is determined by the presence
     * of a cached user and cached token with length > 0.
     */
    public static IsUserLoggedIn(): boolean {
        let cachedUser = authenticationContext.getCachedUser();
        let cachedToken = authenticationContext.getCachedToken(constants.Auth.appId);

        return !!cachedUser && cachedToken.length > 0;
    }

    /**
     * Attempts to get an access token for the user. If successful,
     * sends the user to the home page again where they will now
     * be logged in.
     */
    public static async Login(): Promise<void> {
        let accessToken: string = '';

        try {
            accessToken = await AuthHelper.getAccessToken();
        } catch (err) {
            console.error(err)
        }

        if (accessToken.length > 0) {
            window.location.replace(window.location.origin);
        }
    }

    /**
     * Clears any existing user from the cache, then requests
     * an AD token.
     */
    public static StartSignIn(): void {
        authenticationContext.clearCache();
        authenticationContext.login();
    }

    /**
     * Called from the sign-in-end page. Checks for the presence
     * of the AD token, and notifies teams of a successful log in
     * if it is there, or notifies of failure otherwise.
     */
    public static EndSignIn(): void {
        if (authenticationContext.isCallback(window.location.hash)) {
            authenticationContext.handleWindowCallback(window.location.hash);

            if (window.opener) {
                if (authenticationContext.getCachedUser()) {
                    authenticationContext.acquireToken("https://graph.microsoft.com", (err, token) => {
                        if (token) {
                            msTeams.authentication.notifySuccess(token);
                        } else if (err) {
                            msTeams.authentication.notifyFailure(err);
                        } else {
                            msTeams.authentication.notifyFailure("UnexpectedFailure");
                        }
                    });
                } else {
                    microsoftTeams.authentication.notifyFailure(authenticationContext.getLoginError());
                }
            }
        }
    }

    /**
     * Begins the login flow by opening a popup window
     * at the sign-in-start page.
     */
    private static async getAccessToken(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            msTeams.authentication.authenticate({
                url: `${window.location.origin}/${constants.Auth.signInStartPage}`,
                width: 600,
                height: 535,
                successCallback: (accessToken: string | undefined) => {
                    resolve(accessToken);
                },
                failureCallback: (reason) => {
                    reject(reason);
                }
            })
        })
    }
}