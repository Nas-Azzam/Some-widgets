import React from 'react'

const Link = ({ className, href, children }) => {
  const onclick = (e) => {
    e.preventDefault()
    window.history.pushState({}, '', href)
  }

  return (
    <a onClick={onclick} className={className} href={href}>
      {children}
    </a>
  )
}

export default Link
