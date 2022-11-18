import logo from '../logo.svg';
import '../styles/App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <div className="body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This page is under construction.</p>
        <p>This site was set up using the <a href="https://github.com/gitname/react-gh-pages">React Github Pages guide</a>.</p>
      </div>
    </div>
  );
}

export default App;
