import { RouterHelper } from './helpers';
import * as msTeams from '@microsoft/teams-js';

function App() {
  msTeams.initialize();
  
  return RouterHelper.RenderRoutes();
}

export default App;
