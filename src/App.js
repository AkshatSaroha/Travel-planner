
import './App.css';
import CardSlider from './Components/CardSlider';
import Footer from './Components/Footer';
import Planning from './Components/Planning';
import Middle from './Components/Middle';
import Services from './Components/Services';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Fragment } from 'react';
import Delhi from './Components/Delhi';
function App() {
  return (
 <>
 <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Fragment>
           <Middle/>
           <CardSlider/>
           <Services/>
           
           <Footer/>
          </Fragment>
        }
      />
      
      <Route path='/planning' element={<Planning/>}/>
        <Route path='/delhi' element={<Delhi/>}/>
    </Routes>

  </BrowserRouter>
 </>
   
  );
}

export default App;
