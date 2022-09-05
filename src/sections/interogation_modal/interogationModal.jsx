import React from 'react';
import './styles.scss';

import doctorImage from '../../images/doctorImage.png';
import { motion } from 'framer-motion';
import { useContext, useState } from 'react';
import { Radio } from 'antd';

import GeneralContext from '../../context/generalConrtext';
import ResultModal from '../../modal/resultModal';

const modalVariant = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
const InterogationModal = () => {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  const [value5, setValue5] = useState(0);
  const [value6, setValue6] = useState(0);

  const onChange1 = (e) => {
    setValue1(e.target.value);
  };
  const onChange2 = (e) => {
    setValue2(e.target.value);
  };
  const onChange3 = (e) => {
    setValue3(e.target.value);
  };
  const onChange4 = (e) => {
    setValue4(e.target.value);
  };
  const onChange5 = (e) => {
    setValue5(e.target.value);
  };
  const onChange6 = (e) => {
    setValue6(e.target.value);
    console.log('value6 =', value6);
  };

  const Questions = [
    {
      id: 1,
      question: 'Do your eyes produce too many tears and continually watering?',
      options: (
        <Radio.Group onChange={onChange1} value={value1}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      ),
    },
    {
      id: 2,
      question: 'Do your frequently have redness in your Eyes?',
      options: (
        <Radio.Group onChange={onChange2} value={value2}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      ),
    },
    {
      id: 3,
      question: 'Do you have trouble seeing when it gets dark outside?',
      options: (
        <Radio.Group onChange={onChange3} value={value3}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      ),
    },
    {
      id: 4,
      question: 'Do you normally feel uncomfortable with bright light?',
      options: (
        <Radio.Group onChange={onChange4} value={value4}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      ),
    },

    {
      id: 5,
      question:
        'Do you frequently see specks, dots, lines, or webs that appear in your field of vision?',
      options: (
        <Radio.Group onChange={onChange5} value={value5}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      ),
    },
    {
      id: 6,
      question:
        'Do you frequently see specks, dots, lines, or webs that appear in your field of vision?',
      options: (
        <Radio.Group onChange={onChange6} value={value6}>
          <Radio value={1}>Yes</Radio>
          <Radio value={2}>No</Radio>
        </Radio.Group>
      ),
    },
  ];

  const { setShowResult, showResult, setResult } = useContext(GeneralContext);

  const showDiagnosisResult = () => {
    if (value1 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
    if (value2 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
    if (value3 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
    if (value3 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
    if (value4 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
    if (value5 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
    if (value6 === 1) {
      setShowResult(true);
      setResult(
        'Typically, tearing may be associated with: Bacterial Keratitis, Blocked Tear Duct, Conjunctivitis (Pink Eye), Dry Eye, Allergies'
      );
    }
  };

  return (
    <motion.div
      className='interogation_wrapper'
      variants={modalVariant}
      initial='hidden'
      animate='visible'
    >
      {showResult && <ResultModal />}
      <div className='sub_container'>
        <div className='header'>
          <h1>Let's know how you feel!</h1>
          <p>
            Please all questions must be answered sincerely for proper diagnosis
          </p>
        </div>
        <div className='flex'>
          <img src={doctorImage} />
          <div className='question_container'>
            <div className='sub_question_container'>
              {Questions.map((questions) => {
                const { id, question, options } = questions;
                return (
                  <div className='each_question' key={id}>
                    <p>{question}</p>
                    <div className='options_container'>
                      <div className='options'>{options}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button onClick={() => showDiagnosisResult()}>See result</button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default InterogationModal;
