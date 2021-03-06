import {HashRouter, Route, Switch} from 'react-router-dom';
import './_app.scss';
import Home from './home/Home';
import Contact from './contact/contact';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/contact" component={Contact} exact />
      </Switch>
    </HashRouter>
  );
}

export default App;