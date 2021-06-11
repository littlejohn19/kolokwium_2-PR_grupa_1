import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Posts from './components/posts';
import Home from './components/BDhome';
import NavBar from './components/BDnavbar';

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <div className='container'>
        <div className='content'>
          <Switch>
            <Route path='/' exact component={Posts} />
            <Route path='/home' exact component={Home} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
