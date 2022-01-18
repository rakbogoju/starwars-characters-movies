import './App.css';
import Banner from './components/banner';
import CharactersDropDown from './components/character-dropdown';
import Movies from './components/movies';

function App() {
  return (
    <div>
      <Banner />
      <CharactersDropDown />
      <Movies />
    </div>
  );
}

export default App;
