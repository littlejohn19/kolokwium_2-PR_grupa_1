import './App.css';
import { Route, Switch } from "react-router-dom";
import Posts from "./components/posts";
import Home from "./components/DChome";
import DCnavbar from "./components/common/DCnavbar";

function App() {

  return (
      <div className="container-fluid">
          <DCnavbar />
        <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/" exact component={Posts} />
                    <Route path="/home" exact component={Home}/>
                </Switch>
            </div>
        </div>
      </div>
  );
}

export default App;
