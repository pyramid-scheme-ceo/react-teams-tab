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
    public static IsUserLoggedIn(): boolean {
        let cachedUser = authenticationContext.getCachedUser();
        let cachedToken = authenticationContext.getCachedToken(constants.Auth.appId);

        return !!cachedUser && cachedToken.length > 0;
    }

    public static async Login(): Promise<void> {
        let accessToken: string = '';

        try {
            accessToken = await AuthHelper.getAccessToken();
            console.log("Got token")
            console.log(accessToken);
        } catch (err) {
            console.error(err)
        }

        if (accessToken.length > 0) {
            window.location.replace(window.location.origin);
        }
    }

    public static StartSignIn(): void {
        authenticationContext.clearCache();
        authenticationContext.login();
    }

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