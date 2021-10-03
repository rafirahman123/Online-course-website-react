import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Service from './Components/Services/Service';
import Blog from './Components/Blog/Blog';
import About from './Components/About/About';
import Error from './Components/Error/Error';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>

        <Route path="/home">
        <Home></Home>
        </Route>

        <Route path="/service">
        <Service></Service>
        </Route>

        <Route path="/blog">
        <Blog></Blog>
        </Route>

        <Route path="/about">
        <About></About>
        </Route>

          <Route exact path="/">
              <Home></Home>
          </Route>

          <Route path="*">
             <Error></Error>
          </Route>

        </Switch>

      <Footer></Footer>
    </Router>
  );
}

export default App;
