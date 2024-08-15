import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../home/Home';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import Contact from '../contact/Contact';
import './PageTransition.css';

const PageTransition = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={1200}>
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default PageTransition;