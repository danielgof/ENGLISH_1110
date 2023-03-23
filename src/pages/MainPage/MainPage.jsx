import React from 'react'
import './MainPage.css'
import logo from './logo.png'

const MainPage = () => {
  return (
    <div className='container'>
      <div className='block'>
        <br></br>
        <div className='main-page-info'>
        <div className='img'>
            <br></br>
            <img className='pic' src={logo} alt="logo"/>
            <br></br>
          </div>
        <div className='text'>
            <br></br>
            <p className='home'>
                My project focuses on problem of online advertisement affecting customers’ behavior and equality of
                benefits for customers and buyer affected by advertisement, which is of interest to the community because
                of the importance of online technologies and way they grow these days and the fact that it is affect almost
                all area of human activity including advertisement.
            </p>
            <p className='home'> 
                The purpose of my project is clear. To draw attention to the fact that advertisement in each of its form not
                always benefit customer and seller equally, which will be accomplished by focusing separately on
                customers’ affection by online advertisement and equality of profit for customers affect by advertisement.
            </p>
        </div>
        </div>
      </div>
    </div>
  )
}
export default MainPage