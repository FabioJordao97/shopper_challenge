import GlobalState from './globalState/globalState';
import { Route } from 'react-router';

function App() {
  return (
   <GlobalState>
     <Route />
   </GlobalState>
  );
}

export default App;
