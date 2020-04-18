import React from 'react';
import { RouterHelper, TeamsThemeHelper } from './helpers';
import { Provider, ThemePrepared } from '@fluentui/react-northstar';
import * as msTeams from '@microsoft/teams-js';

export default class App extends React.Component<IAppProps, IAppState> {
  private teamsThemeHelper: TeamsThemeHelper;
  
  constructor(props: IAppProps) {
    super(props);

    this.teamsThemeHelper = new TeamsThemeHelper();

    this.state = {
      theme: this.teamsThemeHelper.getTheme('default')
    };

    msTeams.initialize();
    msTeams.registerOnThemeChangeHandler(this.updateTheme.bind(this));
    msTeams.getContext(context => { this.updateTheme(context.theme) });
  }
  
  render() {
    return (
      <Provider theme={this.state.theme}>
        <RouterHelper.RenderRoutes />
      </Provider>
    )
  }

  private updateTheme(themeString: string | undefined): void {
    this.setState({
      theme: this.teamsThemeHelper.getTheme(themeString)
    });
  }
}

interface IAppProps { }

interface IAppState {
  theme: ThemePrepared;
}