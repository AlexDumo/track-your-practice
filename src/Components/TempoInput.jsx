// import React, { useState } from 'react';

const TempoInput = ({onChange}) => {
  // const [tempo, setTempo] = useState('');

  // const handleChange = (event) => {
  //   setTempo(event.target.value);
  // };

  return (
    <label>
      Tempo:
      {/* <input type="text" value={tempo} onChange={onChange} /> */}
      <input type="text" name="tempo" onChange={onChange} />
    </label>
  );
};

export default TempoInput;
