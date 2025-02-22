import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./component/Navbar"
import Footer from "./component/Footer"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"



const Home = React.lazy(() => import("./pages/Home"))
const About = React.lazy(() => import("./pages/About"))
const Contact = React.lazy(() => import("./pages/Contact"))
const Products = React.lazy(() => import("./pages/Products"))
const Projects = React.lazy(() => import("./pages/Projects"))
const Notfound = React.lazy(() => import("./pages/Notfound"))




function App() {
  return (
    <React.Suspense fallback ={<div> <img style={{ position: "absolute", top: "50%", left: "50%", height:"5rem", width:"5rem" }} src={("./..//images/coglytix-logo-color.svg")} alt=""  /></div>}>
      <BrowserRouter>
  
         <Navbar/> 
         
  
  
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="*" element={<Notfound />} />
       
        </Routes>
      </BrowserRouter>
  
  
      <Footer/> 
  
    </React.Suspense>
    );
}

export default App;
