
'use client'

import { useState } from 'react';

export default function Home() {

  const [inputFields, setInputFields] = useState([
    { id: 1, keyInputValue: '', valueInputValue: '' },
    { id: 2, keyInputValue: '', valueInputValue: '' },
    { id: 3, keyInputValue: '', valueInputValue: '' },
  ]);

  function handleAdd() {

    const newInput = {
      id: crypto.randomUUID(),
      keyInputValue: '',
      valueInputValue: ''
    }

    setInputFields([...inputFields, newInput]);
  }

  return (
    <>
      <div className="input-section">
        <form onSubmit={(e) => e.preventDefault()}>
          
          {inputFields.map(field => {
            return(
              <div key={field.id}>
                <input />
                <input />
                <button onClick={() => {
                  setInputFields(
                    inputFields.filter(f => f.id !== field.id)
                  )
                }}>Delete</button>
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
