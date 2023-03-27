import React from 'react'
import bio from './bio.png'
import './InfoPage.css'

const InfoPage = () => {
  return (
    <>
    <div className='projects' align="center">
      <br></br>
      <div className='info'>
        <br></br>
        <img className='pic' src={bio} alt="logo"/>
        <br></br>
        <br></br>
      </div>
      <br></br>
    </div>
    <div className='projects' align="center">
      <br></br>
      <div className='info'>
        {/* <h2>Can advertisement be benefitial for both: customer and seller?</h2> */}
        <br></br>
          <p className='home'>
            Hi, my name is Daniil Gofman
          </p>
          <p className='home'> 
            This project is created as an assigment for English 1110 course at OSU.
          </p>
          <p className='home'> 
            The idea of that project is to create digital exibiton.
            I'll adding details as progress in project.
          </p>
      </div>
      <br></br>
    </div>
    </>
    // <div className='container'>
    //   <div className='block'>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <br></br>
    //     <div className='main-page-info'>
    //       <div className='img'>
    //         <br></br>
    //         <img className='pic' src={bio} alt="logo"/>
    //         <br></br>
    //       </div>
    //       <div className='text'>
    //         <br></br>
    //         <p className='home'>
    //         Hi, my name is Daniil Gofman
    //         </p>
    //         <p className='home'> 
    //           This project is created as an assigment for English 1110 course at OSU. 
    //         </p>
    //         <p className='home'>
    //             The idea of that project is to create digital exibiton.
    //             I'll adding details as progress in project.
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}
export default InfoPage