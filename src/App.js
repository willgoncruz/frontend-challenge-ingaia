import logo from './logo.svg';
import './App.css';

import { observer } from 'mobx-react-lite';
import { useQuery } from '@apollo/client';
import { useSearchStore } from './providers/search';
import { SearchCharactersQuery } from './api/query/character';

const App = observer(() => {
  const store = useSearchStore();
  const { loading, error, data } = useQuery(SearchCharactersQuery(store.page, store.term));


  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  console.log(data.characters.info)
  store.updateStore(data.characters.info);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
});

export default App;
