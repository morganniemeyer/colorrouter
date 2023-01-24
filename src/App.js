import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Colors from './components/Colors/Colors.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/rgb/:r/:g/:b" component={Colors} />
      </Switch>
    </>
  );
}

export default App;
