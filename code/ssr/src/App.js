import { useState } from 'react'

export default function App({ title }) {
  const [value, setValue] = useState('hello')

  return (
    <div>
      <h1>{title}</h1>
      <div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} />
        {value}
      </div>
    </div>
  );
}
