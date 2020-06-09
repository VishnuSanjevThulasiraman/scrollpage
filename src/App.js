import React from 'react';
import './App.css';
import Scoll from './Scroll';
import NavigationBar from './components/Navigation';
import Listblogs from './components/Listblogs';
import Container from 'react-bootstrap/Container';
import Footer from './components/Footer';
import NameForm from './components/Form';

function App() {

  
    return (
      
        <div>
        <Scoll />
        <NavigationBar />
        
        <Container><Listblogs /></Container>
        <NameForm />
        <Footer />
        
        
        </div>
      
     
      
    );
  
}

export default App;