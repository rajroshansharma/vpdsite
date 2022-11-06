import React from 'react'
import { Bigbox } from '../Bigbox'
import '../pageStyle.css'
import {Smallbox} from '../Smallbox'
import { logoData } from '../../App'

// import {cloudData} from '../../App'

export const SecondBox = (props) => {
    const cloudData = props.data
  return (
    <div className='main-box-1'>
        <div className='main-big-box'>
            <Bigbox data2={props.data[0]}/>
        </div>
       
        {/* small boxes start here */}
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Smallbox data1={cloudData[1].imgLink} data2={cloudData[1].heading} data3={cloudData[1].desc}/>
                </div>
                <div className='col'>
                    <Smallbox data1={cloudData[2].imgLink} data2={cloudData[2].heading} data3={cloudData[2].desc} />
                </div>
                <div class="col">
                    <Smallbox data1={cloudData[3].imgLink} data2={cloudData[3].heading} data3={cloudData[3].desc} />
                </div>
            </div>
        </div>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <Smallbox data1={cloudData[4].imgLink} data2={cloudData[4].heading} data3={cloudData[4].desc} />
                </div>
                <div className='col'>
                    <Smallbox data1={cloudData[5].imgLink} data2={cloudData[5].heading} data3={cloudData[5].desc} />
                </div>
                <div class="col">
                    <Smallbox data1={cloudData[6].imgLink} data2={cloudData[6].heading} data3={cloudData[6].desc} />
                </div>
            </div>
        </div>

        {/* <div>
            <Smallbox/>
        </div> */}

    </div>
  )
}

