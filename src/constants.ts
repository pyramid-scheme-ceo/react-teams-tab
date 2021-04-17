export const TeamsThemes = {
    contrast: "contrast",
    dark: "dark",
    default: "default"
};

export const Auth = {
    appId: process.env.APP_ID!,
    cacheLocation: 'localStorage',
    signInStartPage: 'auth/signinstart',
    signInEndPage: 'auth/signinend',
    authenticatedDomains: {
        "https://graph.microsoft.com": "https://graph.microsoft.com"
    }
};