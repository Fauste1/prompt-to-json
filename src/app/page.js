
'use client'

import { useState } from 'react';

export default function Home() {

  const [inputFields, setInputFields] = useState([1, 2, 3]);

  function handleAdd() {

    const newInputField = crypto.randomUUID();

    setInputFields([...inputFields, newInputField]);
  }

  return (
    <>
      <div className="input-section">
        <form onSubmit={(e) => e.preventDefault()}>
          
          {inputFields.map(field => {
            return(
              <div key={field}>
                <input />
                <input />
                <button>Delete</button>
              </div>
            );
          })}
          
          <button onClick={handleAdd}>Add Fields</button>
        </form>
      </div>
      <div className="output-section"></div>
    </>
  );
}
