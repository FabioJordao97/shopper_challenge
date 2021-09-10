import GlobalState from './globalState/globalState';
import Router from '../src/router/router'

function App() {
  return (
   <GlobalState>
    <Router />
   </GlobalState>
  );
}

export default App;
