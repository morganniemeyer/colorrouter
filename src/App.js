import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.js';
import Colors from './components/Colors/Colors.js';
import NotFound from './components/NotFound/NotFound.js';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Redirect to="/rgb/169/255/247" />
        </Route>
        <Route exact path="/rgb/:r/:g/:b" component={Colors} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
