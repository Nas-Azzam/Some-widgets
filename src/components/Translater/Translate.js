import React, { useState } from 'react'
import DropdownWidget from '../DropdownWidget/DropdownWidget'
import Converter from './Converter'

const Options = [
  {
    id: 1,
    label: 'Afrakaans',
    value: 'af',
  },
  {
    id: 2,
    label: 'Arbic',
    value: 'ar',
  },

  {
    id: 3,
    label: 'hindi',
    value: 'hi',
  },
]

const Translate = () => {
  const [Language, setLanguage] = useState(Options[0])
  const [Text, setText] = useState('')

  return (
    <div>
      <div>
        <div className='ui form'>
          <div className='field'>
            <label> Enter Text </label>
            <input value={Text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
        <DropdownWidget
          label='Select a Language'
          selected={Language}
          onSelected={setLanguage}
          Options={Options}
        />
        <hr />
        <div>
          <Converter Text={Text} Language={Language} />
        </div>
      </div>
    </div>
  )
}

export default Translate
