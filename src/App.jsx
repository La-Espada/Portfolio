import logo from './logo.svg';
import './app.scss';
import { Navbar } from './components/navbar';
import styled from 'styled-components';
import Intro from './components/intro/Intro';
import Portfolio from './components/portfolio/Portfolio';
import Works from './components/works/Works';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';



function App() {
  return (
    <div className="app">
      <Navbar></Navbar>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
