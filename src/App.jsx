import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Service from './components/Service';
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Service></Service>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App
