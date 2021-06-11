import './App.css';
import { SearchPage } from './pages/SearchPage';
import { CharacterPage } from './pages/CharacterPage';
import {
  Switch,
  Route,
  useLocation
} from "react-router-dom";

const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <>
      <Switch location={background || location}>
        <Route exact path='/' component={SearchPage} />
      </Switch>

      { background && <Route path='/character/:id' component={CharacterPage} />}
    </>
  );
};

export default App;
