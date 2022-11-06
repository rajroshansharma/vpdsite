import React from 'react'
import { Smallbutton } from './Smallbutton'

export const Smallbox = (props) => {
  return (
    <div className='small-box'>
        <ul>
            <li>
                <div className='small-box-img'>
                    {props.data1}
                </div>
            </li>
            <li>
                <div className='small-box-heading'>
                    <h2>{props.data2}</h2>
                    <p>{props.data3}</p>
                    <Smallbutton/>
                </div>
            </li>
        </ul>
    </div>
  )
}


{/* <div className='small-box-img'>
            <img src="https://img.icons8.com/color/48/000000/python--v1.png"/>
        </div>
        <div className='small-box-heading'>
            <h2>Complete Web Services.</h2>
            <p>Yes we are giving a world class wen serveces with top notch work<br/> for the betterment and growth of your buisness.</p>
        </div> */}