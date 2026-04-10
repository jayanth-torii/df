
import React, { useState } from 'react'

const Exp1 = () => {
    const [text,setText]=useState('');

  return (
    <div>
      <h2>Experiment 1: useState Hook</h2>
      fghjkg
      <p>Dynamically update content as the user types using the useState hook.</p>
      <div>
        <label>Type something below:
</label>
<br />
<input
type='text'
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder='Start typing .....'
/>
<div>
    <h3>Live Output</h3>
    <h2>{text || 'Your text will appear here...     '}</h2>
</div>
      </div>
    </div>
  )
}

export default Exp1
