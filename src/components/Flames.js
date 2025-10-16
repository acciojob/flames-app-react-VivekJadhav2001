import React, { useState } from 'react';

function Flames() {
  const [relationType, setRelationType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');

  const RelationShipStatus = {
    1: 'Friends',
    2: 'Love',
    3: 'Affection',
    4: 'Marriage',
    5: 'Enemy',
    0: 'Siblings',
    Blank_Input: 'Please Enter valid input',
  };

  function RelationShip() {
    if (firstName.trim() === '' || secondName.trim() === '') {
      setRelationType(RelationShipStatus.Blank_Input);
      return;
    }

    // Convert to lowercase and remove spaces
    let name1 = firstName.toLowerCase().replace(/\s+/g, '').split('');
    let name2 = secondName.toLowerCase().replace(/\s+/g, '').split('');

    // Remove common letters
    for (let i = 0; i < name1.length; i++) {
      const index = name2.indexOf(name1[i]);
      if (index !== -1) {
        name1.splice(i, 1);
        name2.splice(index, 1);
        i--;
      }
    }

    const totalLength = name1.length + name2.length;
    const relationShipCode = totalLength % 6;
    const status = RelationShipStatus[relationShipCode];
    setRelationType(status);
  }

  return (
    <>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        data-testid="input1"
        name="name1"
      />
      <input
        type="text"
        placeholder="Second Name"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        data-testid="input2"
        name="name2"
      />
      <button
        onClick={RelationShip}
        data-testid="calculate_relationship"
        name="calculate_relationship"
      >
        Calculate RelationShip Future
      </button>
      <button
        onClick={() => {
          setFirstName('');
          setSecondName('');
          setRelationType('');
        }}
        data-testid="clear"
        name="clear"
      >
        Clear
      </button>
      <h3 data-testid="answer">{relationType}</h3>
    </>
  );
}

export default Flames;
