import React,{useState} from 'react';
import StepOtp from '../Steps/StepOtp/StepOtp';
import StepPhoneEmail from '../Steps/StepPhoneEmail/StepPhoneEmail';

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};

const Authenticat = () => {
  const [step, setStep] = useState(1);
  const Steps = steps[step];

  function onNext() {
      setStep(step + 1);
      console.log("Next is Updated");
  }
    return (
        <Steps onNext={onNext} />
    );

}

export default Authenticat;