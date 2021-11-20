import React, { useState } from 'react'

const Accordion = ({ items }) => {
  const [ActiveIndex, setActiveIndex] = useState(null)

  const onTitle = (index) => {
    setActiveIndex(index)
  }

  const renderItem = items.map((items, index) => {
    const active = index === ActiveIndex ? 'active' : ''
    return (
      <React.Fragment key={items.title}>
        <div onClick={() => onTitle(index)} className={`title ${active}`}>
          <i className='dropdown icon'></i>
          {items.title}
        </div>
        <div className={`content ${active}`}>
          <p>{items.contents} </p>
        </div>
      </React.Fragment>
    )
  })

  return <div className='ui styled accordion'>{renderItem}</div>
}

export default Accordion
