import './styles.scss';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import GeneralContext from '../context/generalConrtext';
import doctorImage from '../images/doctorImage.png';

const resultVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};
const resultContainerVariants = {
  hidden: {
    y: '-200vh',
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      type: 'spring',
      stiffness: 130,
    },
  },
};
const ResultModal = () => {
  const { result } = useContext(GeneralContext);
  return (
    <motion.div
      className='result_wrapper'
      variants={resultVariants}
      initial='hidden'
      animate='visible'
    >
      <motion.div className='sub_container' variants={resultContainerVariants}>
        <img src={doctorImage} />
        <div className='text'>
          <h1>Diagnosis Result</h1>
          <h3>{result}</h3>

          <h2>Prevention Tips</h2>
          <ul>
            <li>Eat Well</li>
            <li>Quit Smoking</li>
            <li>Wear Sunglasses</li>
            <li>Use Safety Eyewear</li>
            <li>Look Away From the Computer Screen</li>
            <li>Visit Your Eye Doctor Regularly</li>
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ResultModal;
