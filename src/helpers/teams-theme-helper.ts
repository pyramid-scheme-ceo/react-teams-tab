import { ThemePrepared, themes } from '@fluentui/react-northstar';
import { TeamsThemes } from '../constants';

export default class TeamsThemeHelper {
    public static getTheme(themeStr: string | undefined): ThemePrepared {
        themeStr = themeStr || '';

        switch (themeStr) {
            case TeamsThemes.dark:
                return themes.teamsDark;
            case TeamsThemes.contrast:
                return themes.teamsHighContrast;
            case TeamsThemes.default:
            default:
                return themes.teams;
        }
    }
}