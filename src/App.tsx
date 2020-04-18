import React from 'react';
import { RouterHelper } from './helpers';
import { Provider, themes } from '@fluentui/react-northstar';
import * as msTeams from '@microsoft/teams-js';

function App() {
  msTeams.initialize();
  
  return (
    <Provider theme={themes.teams}>
      <RouterHelper.RenderRoutes />
    </Provider>
  )
}

export default App;
