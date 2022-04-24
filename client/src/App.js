import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />;
          <Route path="/home/" component={Home} />
          <Route path="/:id" component={Detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
