import './App.css';
import './components/pageStyle.css';
import {Navbar} from './components/Navbar';
import { Box } from './components/Box';
import { useState, useEffect } from 'react';
import { Mobilebox } from './Mobilecomponents/Mobilebox';
import { Advertising } from './components/Advertising';
import { SecondBox } from './components/further box/SecondBox';
import { ForthBox } from './components/further box/ForthBox';
import { BrowserRouter , Routes, Route, Link } from 'react-router-dom'



export const logoData = [
  {
    id:0,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/3-key.png"/>,
    heading:"WEB 3.0",
    desc:"Web 3.0 is the upcoming third generation of the internet where websites and apps will be able to process information in a smart human-like way."
  },
  {
    id:1,
    imgLink:<img src="https://img.icons8.com/external-flat-wichaiwi/40/000000/external-metaverse-metaverse-flat-wichaiwi-10.png"/>,
    heading:"Metaverse & Metaspaces",
    desc:"Hypothetical iteration of the Internet as a universal and immersive virtual world that is facilitated by the use of virtual reality ."
  },
  {
    id:2,
    imgLink:<img src="https://img.icons8.com/nolan/40/four-squares.png"/>,
    heading:"Next Gen DeFi Apps",
    desc:"Cross chain dApps. Metaverse Application. "
  },
  {
    id:3,
    imgLink:<img src="https://img.icons8.com/nolan/40/receipt-dollar.png"/>,
    heading:"Decentralized finance",
    desc:"Multichain defi solutions. Scalable defi platforms"
  },
  {
    id:4,
    imgLink:<img src="https://img.icons8.com/external-flat-wichaiwi/40/000000/external-metaverse-metaverse-flat-wichaiwi-6.png"/>,
    heading:"Advanced Gaming",
    desc:"Crypto-based games. Play-to-earn games"
  },
  {
    id:5,
    imgLink:<img src="https://img.icons8.com/fluency/40/000000/mac-book-air.png"/>,
    heading:"Remote workplace",
    desc:"3D enabled workplaces. Virtual meetings (Avatars)"
  },
  {
    id:6,
    imgLink:<img src="https://img.icons8.com/cotton/40/000000/nft-node--v2.png"/>,
    heading:"Advanced NFT use cases",
    desc:"Immutable NFTs records. Funding to DAO. Tokenization"
  },
];

const cloudData = [
    {
        id:0,
        imgLink:<img src="https://img.icons8.com/nolan/96/FF8177/B12A5B/cloud-sync.png"/>,
        heading:"Cloud",
        desc:"on-demand availability of computer system resources, especially data storage and computing power."
    },
    {
        id:1,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/cloud-storage.png"/>,
        heading:"Cloud Storage",
        desc:"Upto 25 GB of free storage and expandable upto 256 TB of storage with backup."
    },
    {
        id:2,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/cloud-backup-restore.png"/>,
        heading:"Data backup & recovery",
        desc:"Data is the lifeblood of modern organizations, and losing data can cause massive damage."
    },
    {
        id:3,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/cloud-file.png"/>,
        heading:"Testing & Development",
        desc:""
    },
    {
        id:4,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/upload-2.png"/>,
        heading:"Deployment",
        desc:"cloud environments and infrastructure to simulate realistic user traffic scenarios to measure software performance, functionality, and security."
    },
    {
        id:5,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/add-database.png"/>,
        heading:"Big Data analysis",
        desc:"advanced analytic techniques against large data sets, including structured/unstructured data and streaming/batch data."
    },
    {
        id:6,
        imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/apple-mail.png"/>,
        heading:"VPD Mails",
        desc:"fully customizable, secured Mails presenting VPD E-mails"
    },
];

const crmData = [
  {
    id:0,
    imgLink:<img src="https://img.icons8.com/nolan/96/FF8177/B12A5B/axie-infinity.png"/>,
    heading:"CRM",
    desc:" managing all your company's relationships and interactions with customers and potential customers "
  },
  {
    id:1,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/commercial.png"/>,
    heading:"Social media marketing",
    desc:"Social media marketing is the use of social media platforms and websites to promote a product or service."
  },
  {
    id:2,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/connected-people.png"/>,
    heading:"Peoples",
    desc:"support the vision and goals of the organisation through great people interventions. "
  },
  {
    id:3,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/submit-resume.png"/>,
    heading:"Finance & HR",
    desc:"support the vision and goals of the organisation through great people interventions."
  },
  {
    id:4,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/bulleted-list.png"/>,
    heading:"Content Creation",
    desc:"process of generating topic ideas that appeal to your buyer persona, creating written or visual content around those ideas, "
  },
  {
    id:5,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/domain.png"/>,
    heading:"SEO & SEM",
    desc:"Helping search engines understand and present content. Your site may be smaller or larger than our example site and offer vastly different content. "
  },
  {
    id:6,
    imgLink:<img src="https://img.icons8.com/nolan/64/FF8177/B12A5B/web.png"/>,
    heading:"Website optimization & CRO",
    desc:"process of using strategies & experiments to improve performance of your website, drive traffic & increase conversions. "
  }
];

function useWindowSize(){
  const[size, setSize] = useState(window.innerWidth);
  useEffect(()=>{
    const handleResize = () => {
      setSize(window.innerWidth)
    };
    window.addEventListener("resize", handleResize);
  },[]);
  return size;
}

function App() {
  const widthVarSize = useWindowSize(); 
  return (
    <div className='landing-page'> 
      { widthVarSize > 700 ? <Advertising/> : null}
      <Navbar/>
      <div className='box-design-1'>
      <div>
        <h2 style={{color:'white',
            textAlign:'center',
            padding:'30px',
          }}>
          Leveraging tech to drive a better IT experience.
        </h2>
        <p className='main-subheading'>
          Growing a business often requires keeping up with the latest industry trends,
          including technology.We Intoduce you <br/> Virtual Product Developers in short VPD 
          where we keep a long term vesion to help grow your business. 
        </p>
      </div>
      {/* brand logog */}
      <div className='brand-logo'>
        <h1>VPD</h1>
        <p>VIRTUAL PRODUCT DEVELOPERS</p>
      </div>
      {/* boxes start here */}
      <p className='featured-line' >FEATURED SERVICES</p>
      {widthVarSize < 800 ?
        <Mobilebox data={logoData}/> 
        :
        <div className='app-main-box'>
          <Box data={logoData}/>
        </div>
      }
    </div>

      {/* second box start here */}

        <div className='box-design-2'>
      <p className='featured-line' >CLOUD BASED SERVICES</p>
      {widthVarSize < 800 ?
        <Mobilebox data={cloudData}/> 
        :
        <div className='app-main-box'>
          <SecondBox data={cloudData}/>
        </div>
      }
    </div>
      {/* third box starts here */}
      <div className='box-design-3'>
      <p className='featured-line' >CRM Customer Relationship Management</p>
        
      {widthVarSize < 800 ?
      <Mobilebox data={crmData}/> 
      :
      <div className='app-main-box'>
        <SecondBox data={crmData}/>
      </div>
      }
    </div>

      {/* forth box starts here */}
      <div className='box-design-4'>
      <p className='featured-line' >REGULAR SERVICES</p>
      <ForthBox/>
      </div>
      {/* ending seen */}
       <div>
        <h2 style={{color:'white',
            textAlign:'center',
            padding:'70px',
          }}>
          If you look at history, innovation doesn’t come just from giving people incentives; it comes from creating environments where their ideas can connect.“
        </h2>
        <p style={{color:'white',textAlign:'center'}}>
          Perhaps our perception of innovation amounts to the sum of when, where, and how we’ve lived.
        </p>
        <p className='copyright' >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 2c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 3c1.82 0 3.413.973 4.288 2.428l-1.714 1.029A3 3 0 1 0 12 15a2.998 2.998 0 0 0 2.573-1.456l1.715 1.028A4.999 4.999 0 0 1 7 12c0-2.76 2.24-5 5-5z" fill="rgba(255,255,255,1)"/></svg>
          <b>2022 Virtual Product Developers. All Rights Reserved.</b><br/> Designed & developed by Virtual Product Developers in asscociation with scibiscus.tech </p>
      </div>
    </div>
  );
}

export default App;



// {widthSize <= 500 ? <NavbarMobile/> : <Navbar/>}