import React from 'react'

export const Bigbox = (props) => {
  return (
    <div className='big-box-01'>
        <ul>
            <li className='big-box-img-01'>
                {props.data2.imgLink}
            </li>
            <li className='heading-big-box-01'>
                <h3>{props.data2.heading}</h3>
                <p>
                    {props.data2.desc}.
                </p>
            </li>
        </ul>
    </div>
  )
}
