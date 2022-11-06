import React from 'react'
import { Mobilesmallbox } from './Mobilesmallbox'
import './mobilestyle.css'

export const Mobilebox = (props) => {
  return (
    <div className='mobile-box'>
         <ul>
            <li className='mobile-big-box-img-01'>
                {props.data[0].imgLink}
            </li>
            <li className='mobile-heading-big-box-01'>
                <h3>{props.data[0].heading}</h3>
                <p>
                   {props.data[0].desc}
                </p>
            </li>
        </ul>
        <div className='mobile-coloumn-content'>
            {/* small boxes start here */}
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Mobilesmallbox data1={props.data[1].imgLink} data2={props.data[1].heading}/>
                </div>
                <div className='col'>
                    <Mobilesmallbox data1={props.data[2].imgLink} data2={props.data[2].heading} />
                </div>
            </div>
        </div>
        <br/>
        {/* second row of small boxes start here */}
        <div className='container' id='down-cloumn'>
            <div className='row'>
                <div className='col'>
                    <Mobilesmallbox data1={props.data[3].imgLink} data2={props.data[3].heading} />
                </div>
                <div className='col'>
                    <Mobilesmallbox data1={props.data[5].imgLink} data2={props.data[5].heading} />
                </div>
            </div>
        </div>
        </div>
        
        {/* <Mobilesmallbox/> */}
    </div>
  )
}
