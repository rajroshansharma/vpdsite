import React from 'react'
import { Mobilebox } from '../../Mobilecomponents/Mobilebox';

const menuData = [
    {
        id:0,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/software-box.png"/>,
        heading:"Software Support",
        desc:"Technical support or break/fix services that are delivered for specific software products "
    },
    {
        id:1,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/electronics.png"/>,
        heading:"Hardware Support",
    },
    {
        id:2,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/server.png"/>,
        heading:"Network Infrastucture",
    },
    {
        id:1,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/android.png"/>,
        heading:"Android App Development",
    },
    {
        // id:4, garbage value dont delete
    },
    {
        id:5,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/bluestacks.png"/>,
        heading:"Full Stack WebDevelopement",
    },

];

const menuData1 = [
    {
        id:0,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/home-office.png"/>,
        heading:"Help Desk",
        desc:"provides assistance and information usually for electronic or computer problems."
    },
    {
        id:3,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/computer.png"/>,
        heading:"IT consulting",
    },
    {
        id:2,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/online-support.png"/>,
        heading:"Customer help Line",
    },
    {
        id:3,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/mind-map.png"/>,
        heading:"Learning & Training ",
    },
    {
        // id:4, garbage value dont delete
    },
    {
        id:5,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/book-stack.png"/>,
        heading:"Books",
    },

];

const menuData2 = [
    {
        id:0,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/delivery-settings.png"/>,
        heading:"Salesforce",
        desc:"Grow your business with CRM & salesforce with the all-in-one platform for Sales, Marketing & more. "
    },
    {
        id:3,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/cyber-security.png"/>,
        heading:"Network Security",
    },
    {
        id:2,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/accept-database.png"/>,
        heading:"Data Storage & management",
    },
    {
        id:3,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/brick.png"/>,
        heading:"Blockchain based apps ",
    },
    {
        // id:4, garbage value dont delete
    },
    {
        id:5,
        imgLink:<img src="https://img.icons8.com/nolan/40/FF8177/B12A5B/client-management.png"/>,
        heading:"Recruitment",
    },

];


export const ForthBox = () => {
  return (
    
    <div>
        <div class="container ">
        <div class="row">
          <div class="col">
          <Mobilebox data={menuData}/>
          </div>
        <div class="col">
          <Mobilebox data={menuData1}/>
        </div>
        <div class="col">
          <Mobilebox data={menuData2}/>
        </div>
      </div>
      </div>
     
    </div>
  )
}
