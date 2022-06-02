import React from 'react';

// in: obj ({size: number})
// out: jsx
const Spinner = props => {
  return (
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
