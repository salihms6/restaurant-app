
import './App.css';

import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Restview from './components/Restview';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <Header/>
     <Routes> 
      <Route path='' element={<Home></Home>}/>
      <Route path='viewrest/:id' element={ <Restview></Restview>
}/>
</Routes>
      
     
      < Footer/>
      
        
      
    </div>
  );
}

export default App;
