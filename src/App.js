import WelcomeModal from './sections/welcome_modal/welcomeModal';
import InterogationModal from './sections/interogation_modal/interogationModal';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import './styles.scss';
import { useContext } from 'react';
import GeneralContext from './context/generalConrtext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
  Routes,
} from 'react-router-dom';
import { INTEROGATION, LANDING_PAGE } from './route';

function App() {
  const location = useLocation();
  const { setShowResult } = useContext(GeneralContext);

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => setShowResult(false)}
    >
      <Routes location={location} key={location.key}>
        <Route exact path={LANDING_PAGE} element={<WelcomeModal />} />
        <Route path={INTEROGATION} element={<InterogationModal />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
