import React from 'react'
import { Bigbox } from './Bigbox'
import './pageStyle.css'
import {Smallbox} from './Smallbox'
import { logoData } from '../App'

export const Box = (props) => {
  return (
    <div className='main-box-1'>
        <div className='main-big-box'>
            <Bigbox data2={props.data[0]}/>
        </div>
       
        {/* small boxes start here */}
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Smallbox data1={logoData[1].imgLink} data2={logoData[1].heading} data3={logoData[1].desc}/>
                </div>
                <div className='col'>
                    <Smallbox data1={logoData[2].imgLink} data2={logoData[2].heading} data3={logoData[2].desc} />
                </div>
                <div class="col">
                    <Smallbox data1={logoData[3].imgLink} data2={logoData[3].heading} data3={logoData[3].desc} />
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Smallbox data1={logoData[4].imgLink} data2={logoData[4].heading} data3={logoData[4].desc} />
                </div>
                <div className='col'>
                    <Smallbox data1={logoData[5].imgLink} data2={logoData[5].heading} data3={logoData[5].desc} />
                </div>
                <div class="col">
                    <Smallbox data1={logoData[6].imgLink} data2={logoData[6].heading} data3={logoData[6].desc} />
                </div>
            </div>
        </div>

        {/* <div>
            <Smallbox/>
        </div> */}

    </div>
  )
}

