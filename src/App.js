import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar'
import Benvenuto from './components/Benvenuto';
import MyFooter from './components/MyFooter';
import ContenutoPrincipale from './components/ContenutoPrincipale';

function App() {
return(
<div>
  <header>
    <MyNavbar />
    <Benvenuto />
    </header>
<main>
  <ContenutoPrincipale />
</main>
<footer>
  <MyFooter />
</footer>
</div>


)
}

export default App;
