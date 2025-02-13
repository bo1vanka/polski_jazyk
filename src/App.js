import './styles/main.scss';
import './styles/normalize.scss';
import Header from './shared/Header/Header';
import Home from './pages/Home/Home';
import Alphabet from './pages/Aplhabet/Aplhabet';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Footer from './shared/Footer/Footer';
import Books from './pages/Books/Books';
import Registration from './pages/Registration/Registration';
import FlashCardsChoice from './pages/FlashCardsChoice/FlashCardsChoice';
import FlashCards from './pages/FlashCards/FlashCards';
function App() {
  return (
    <div className="App">
        
      <Router>
      <Header/>
      
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/alphabet" element={<Alphabet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book" element={<Books />} /> 
        <Route path="/registration" element={<Registration />} />
        <Route path="/flashcardschoice" element={<FlashCardsChoice />} />
        <Route path="/flashcards/:theme" element={<FlashCards />} />
      </Routes>
      <Footer />
    </Router>
     
    </div>
  );
}

export default App;
