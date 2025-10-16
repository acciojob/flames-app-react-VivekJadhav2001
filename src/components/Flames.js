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

    let name1 = firstName.toLowerCase().split('');
    let name2 = secondName.toLowerCase().split('');

    // remove common letters
    name1.forEach((char) => {
      const index = name2.indexOf(char);
      if (index !== -1) {
        name2.splice(index, 1);
        name1.splice(name1.indexOf(char), 1);
      }
    });

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
        className="border-2 border-black mr-2"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        data-testid="input1"
        name="name1"
      />
      <input
        type="text"
        placeholder="Second Name"
        className="border-2 border-black mr-2"
        value={secondName}
        onChange={(e) => setSecondName(e.target.value)}
        data-testid="input2"
        name="name2"
      />
      <button
        className="text-cyan-300 mr-3.5 bg-gray-400 cursor-pointer hover:bg-gray-800"
        onClick={RelationShip}
        data-testid="calculate_relationship"
        name="calculate_relationship"
      >
        Calculate RelationShip Future
      </button>
      <button
        className="text-cyan-300 p-2 bg-gray-400 cursor-pointer hover:bg-gray-800"
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
