import React from 'react'
import { Grid } from '@mui/material'
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      
      <Grid container>
        <Grid item xs={12}   lg={3.5} className="firstgrid">
          <p className='foot1Para'>ea elit quis aute nulla sit exercitation </p>
          <p className='foot2Para'>ea elit quis aute nulla sit exercitation culpa
elit sit eu sunt ea id et laboris et enim
deserunt nulla aliqua</p>
  <a href='/' className='afootPara'>GET STARTED</a>
        </Grid>
        <Grid item xs={12} sm={6} lg={2} className="secondgrid">
          <ul className='footerList'>
            <li className='listItemfoot'>Investors</li>
            <li className='listItemfoot'>News</li>
            <li className='listItemfoot'>Blogs</li>
            <li className='listItemfoot'>Case study</li> 
            <div className='footListline'></div> 
            <li className='listItemfoot'>Sales & support</li> 
          </ul>

          </Grid>
          <Grid item xs={12} sm={6} lg={2} className="secondgrid">
          <ul className='footerList'>
            <li className='listItemfoot'>Team</li>
            <li className='listItemfoot'>Pricing</li>
            <li className='listItemfoot'>Support</li>
            <li className='listItemfoot'>Product Portfolio</li> 
            <div className='footListline'></div>
            <li className='listItemfoot contno'> <PhoneInTalkOutlinedIcon/> 9343248857</li> 
          </ul>

          </Grid>
          <Grid item xs={12} sm={6} lg={2} className="secondgrid">
          <ul className='footerList'>
            <li className='listItemfoot'>Compliance</li>
            <li className='listItemfoot'>Security</li>
            <li className='listItemfoot'>Contact Us</li>
            <li className='listItemfoot dinone'>  ..</li> 
            <div className='footListline'></div>
            <li className='listItemfoot'> <MailOutlineIcon/> support@crediwatch.in</li> 
          </ul>

          </Grid>
          <Grid item xs={12} sm={6} lg={2} className="secondgrid2">
          <ul className='footerList'>
            <li className='listItemfoot'>Existing Users</li>
            <li className='listItemfoot login'>LOGIN</li>
            <li className='listItemfoot coonnect '>Connect With Us</li>
            <li className='listItemfoot footericons'> <FacebookOutlinedIcon className='icons'/> &nbsp; <TwitterIcon className='icons'/> &nbsp; <LinkedInIcon className='icons'/> </li> 
          </ul>
          </Grid>
          
     
      </Grid>
      <div className='lastline'></div>
      <Grid container>
        <Grid item xs={12}>
          <p className='copyFoot'>2020 Crediwatch. All rights reserved.</p>
        </Grid>
      </Grid>
    </div>
  )
}

export default Footer

