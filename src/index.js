import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar"
import Header from './components/Header'
import ProjectsContainer from './components/ProjectsContainer'
import AboutContainer from './components/AboutContainer'
import ServiceContainer from './components/ServiceContainer'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './index.css';

ReactDOM.render(
  <Navbar />,
  document.getElementById('navbar')
);

ReactDOM.render(
    <Header />, 
    document.getElementById('header')
)

ReactDOM.render(
    <ProjectsContainer />,
    document.getElementById("projectsContainer")
)

ReactDOM.render(
    <AboutContainer />,
    document.getElementById("aboutContainer")
)

ReactDOM.render(
    <ServiceContainer />,
    document.getElementById("serviceContainer")
)

ReactDOM.render(
    <Contact />,
    document.getElementById("contact")
)

ReactDOM.render(
    <Footer />,
    document.getElementById("footer")
)