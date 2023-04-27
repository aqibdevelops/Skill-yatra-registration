import './App.css';
import Registration from './components/registration';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './header';
import Footer from './footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
