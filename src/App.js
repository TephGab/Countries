import './App.css';
import Home from './component/Home';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from './component/NotFound';
import About from './component/About';
import Navigation from './component/Navigation';
// import Logo from './component/Logo';

function App() {
  return (
      <BrowserRouter>
        <Navigation/>
        {/* <Logo/> */}

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>

  );
}

export default App;
