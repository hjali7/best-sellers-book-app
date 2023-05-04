import React from 'react'

const handleClickButton = (e) => {
    alert("read more book")
}

const Header = () => {
  return (
    <section className='header'>
        <div>
            <h1>amazon</h1>
        </div>
        <p>best seller book in month</p>
        <button onClick={handleClickButton} className='btn'>read more</button>
    </section>
  )
}

export default Header
