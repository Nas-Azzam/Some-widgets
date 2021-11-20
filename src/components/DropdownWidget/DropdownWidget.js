// import { cleanup } from '@testing-library/react'
import React, { useState, useEffect, useRef } from 'react'

const DropdownWidget = ({ Options, selected, onSelected, color, label }) => {
  const [open, setOpen] = useState(!true)
  const ref = useRef()

  // const colorChange = () => {
  //   setColor(Options.value)
  //   return color
  // }

  useEffect(() => {
    // const onBodyClick = (event) => {
    //   if (ref.current.contains(event.target)) {
    //     return
    //   }
    //   setOpen(false)
    // }

    // mannual event listner
    const bClick = window.addEventListener(
      'click',
      (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          return null
        }
        setOpen(false)
      },
      { capture: true }
    )
    return () => {
      return bClick
    }
  }, [])

  const renderOptions = Options.map((option) => {
    // show class based on state for dropdown
    if (option.value === selected.value) {
      return null
    }

    return (
      <div
        ref={ref}
        key={option.id}
        className='item'
        onClick={() => onSelected(option)}
      >
        {option.label}
      </div>
    )
  })
  return (
    <div className='ui form'>
      <div className='field'>
        <label className='label'>{label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          <i className='dropdown icon'> </i>
          <div className='text'>{selected.label}</div>
          <div className={`menu ${open ? 'visible transition' : ''}`}>
            {renderOptions}
          </div>
        </div>
      </div>

      <h1 style={{ color: color, fontSize: '20px' }}>This Text is Color?</h1>
      <button>change Color</button>
    </div>
  )
}

export default DropdownWidget
