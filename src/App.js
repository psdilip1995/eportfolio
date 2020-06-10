import React from 'react';
import Header from './components/Header/Header';
import Skills from './components/Skills/Skills';
import Info from './components/Info/Info';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div style={{width:'100%' ,height:window.innerHeight}}>
      <Header />
      <Skills />
      <Info />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
