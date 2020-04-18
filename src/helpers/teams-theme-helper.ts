import { ThemePrepared, themes } from '@fluentui/react-northstar';
import { TeamsThemes } from '../constants';

export default class TeamsThemeHelper {
    public getTheme(themeStr: string | undefined): ThemePrepared {
        let theme: ThemePrepared;
        themeStr = themeStr || '';

        switch (themeStr) {
            case TeamsThemes.dark:
                theme = themes.teamsDark;
                break;
            case TeamsThemes.contrast:
                theme = themes.teamsHighContrast;
                break;
            case TeamsThemes.default:
            default:
                theme = themes.teams;
        }

        return theme;
    }
}