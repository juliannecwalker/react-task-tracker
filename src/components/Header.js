import React from 'react'
import Button from './Button'

function Header(props) {
  const onClick = () => {
      console.log('clickkk')
  }
  return (
    <header className='header'>
        <h1>{props.title}</h1>
        <Button color='pink' text='Hello' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
    title : 'Task Tracker',
}

export default Header
