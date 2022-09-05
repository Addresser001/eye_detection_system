import React, { useEffect, useState } from 'react';
import GeneralContext from './generalConrtext';

// import { useHistory } from 'react-router-dom'

// The general state would hold state objects that
const GeneralState = (props) => {
  // const { push } = useHistory()

  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState();

  return (
    <GeneralContext.Provider
      value={{
        showResult,
        setShowResult,
        result,
        setResult,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};

export default GeneralState;
