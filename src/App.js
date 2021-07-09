import './App.css';
import { MainBrand } from './components/Brands';
import { Maincontent } from './components/Content';
import { Maincontentone } from './components/ContentOne';
import { Maincontentthree } from './components/ContentThree';
import { Maincontenttwo } from './components/ContentTwo';
import { MainFooter } from './components/Footer';
import { NavBarone } from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBarone />
      <Maincontent />
      <Maincontentone />
      <Maincontenttwo />
      <MainBrand />
      <Maincontentthree />
      <MainFooter />
    </div>
  );
}

export default App;
