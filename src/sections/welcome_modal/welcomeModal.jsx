import React from 'react';
import Typewriter from 'typewriter-effect';
import doctorImage from '../../images/doctorImage.png';
import { motion, AnimatePresence } from 'framer-motion';
import './styles.scss';
import { useState } from 'react';
import { useContext } from 'react';
import GeneralContext from '../../context/generalConrtext';
import { Link } from 'react-router-dom';
import { INTEROGATION } from '../../route';

const modalVariant = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,

    transition: {
      duration: 0.5,
    },
  },

  exit: {
    y: '-100vh',
    transition: { ease: 'easeInOut' },
  },
};
const buttonContainerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 2,
      duration: 1.5,
    },
  },
};
const WelcomeModal = () => {
  // const { setDiagnosisBtn } = useContext(GeneralContext);
  return (
    <motion.div
      className='modal'
      variants={modalVariant}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className='image_container'>
        <img src={doctorImage} alt='Doctor Image' />
      </div>
      <div className='text_container'>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<h1>Welcome to Group 10 Eye Clinic, for all Eye defect Solutions and Diagnosis...</h1>'
              )
              .start();
          }}
          options={{
            delay: 30,
            cursor: ' ',
          }}
        />
        <motion.div
          className='button_container'
          variants={buttonContainerVariant}
        >
          <p>"...an expert system specialize in eye defect diagnosis..."</p>
          <Link to={INTEROGATION}>
            <button>Let's diagnize your health</button>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WelcomeModal;
