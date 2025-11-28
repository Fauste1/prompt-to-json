
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

  function handleFieldUpdate(fieldId, newKeyValue, newValueValue) {

    const newInputFields = inputFields.map(f => {

      if (f.id === fieldId) {
        return {
          id: f.id,
          keyInputValue: newKeyValue,
          valueInputValue: newValueValue
        };
      } else {
        return f;
      }

    })

    setInputFields(newInputFields)
  }

  const myStyle = {
    display: 'flex',
    gap: '100px',
    marginLeft: '50px',
  }

  return (
    <>
      <div style={myStyle}>
        <div className="input-section section" >
          <h1>Your Input</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            
            {inputFields.map(field => {
              return(
                <div key={field.id}>
                  <input 
                    value={field.keyInputValue}
                    onChange={e => handleFieldUpdate(field.id, e.target.value, field.valueInputValue)}
                  />
                  <input 
                    value={field.valueInputValue}
                    onChange={e => handleFieldUpdate(field.id, field.keyInputValue, e.target.value)}
                  />
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
        <div className="output-section section">
            <h1>Your JSON output</h1>
            <div style={{background: '#fff'}}>
              &#123; 
              <div style={{marginLeft: '10px'}}>
                { inputFields.map(field => {
                  return(
                    <div key={field.id}>
                    {field.keyInputValue && <span>&quot;{field.keyInputValue}&quot;</span>}{field.keyInputValue && field.valueInputValue && <span>:</span>} {field.valueInputValue && <span>&quot;{field.valueInputValue}&quot;</span>}{field.valueInputValue || field.keyInputValue ? <span>,</span> : ''}
                  </div>
                  );
                }) }
              </div>
              &#125;
            </div>
        </div>
      </div>
      <p style={{ margin: '50px 0px 0px 50px' }}>Built by <a href="https://github.com/Fauste1" target="_blank">Štěpán (Steve) Fau</a></p>
    </>
  );
}
