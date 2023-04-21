import React from 'react'
import bio from './bio.png'
import './InfoPage.css'

const InfoPage = () => {
  return (
    <>
    <div className='projects' align="center">
      <br></br>
      <div className='home'>
        <br></br>
        <img className='pic' src={bio} alt="logo"/>
        <br></br>
        <br></br>
      </div>
      <br></br>
    </div>
    <div className='projects' align="center">
      <br></br>
      <div className='home'>
        <br></br>
          <p className='info'>
            Hi, my name is Daniil Gofman
          </p>
          <p className='info'> 
            This project is created as an assigment for English 1110 course at OSU.
          </p>
          <p className='info'> 
            The idea of that project is to create digital exibiton that will encourage people to pat attention to advertisement.
            I'll add details as progress in that project.
          </p>
          <br></br>
      </div>
      <br></br>
    </div>
    </>
  )
}
export default InfoPage