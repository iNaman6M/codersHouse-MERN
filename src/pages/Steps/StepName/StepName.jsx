import React from 'react'

const StepName = ({onNext}) => {
    return (
        <>
       <h1>name page</h1>
       <button onClick={onNext}>
           Next 
       </button>
        </>
    )
}

export default StepName;
