import React from 'react'

const Navbar = () => {
  return (
    <div className='menu-bar'>
    <img src='https://www.freepnglogos.com/uploads/bus-png/file-bus-svg-wikimedia-commons-29.png' />
        <ul className='menu-list'>
       <li>Accueil</li>
       <li>Reservation</li>
       <li className='btn-orange'>Se connecter</li>
        </ul>
  </div>
     )
}

export default Navbar
