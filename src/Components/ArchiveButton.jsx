import React from 'react';

const ArchiveButton = ({ onChange }) => {
  return <button className='btn btn-primary' type="submit" onChange={onChange}>Add to Archive</button>;
};

export default ArchiveButton;
