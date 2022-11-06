import React from 'react'

export const Mobilesmallbox = (props) => {
  return (
    <div className='mobile-small-box'>
      <ul>
        <li className='mobile-small-box-img-01'>
          {props.data1}
         </li>
        <li className='mobile-heading-small-box-01'>
          <h3>{props.data2}</h3>
        </li>
        <li className='mobile-button-link'>
          <a href="https://scibiscusindia.github.io/contact-form-VPD/">Contact Us</a>
        </li>
        </ul>
    </div>
  )
}

{/* <a href="../contact-form-11/index.html">Contact Us</a> */}