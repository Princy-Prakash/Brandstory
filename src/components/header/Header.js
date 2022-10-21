import React,{useState} from 'react'
import AppBar from '@mui/material/AppBar';  
 import './Header.css'  
import Button from '@mui/material/Button';  
import { styled  } from '@mui/material/styles';
import Grid from '@mui/material/Grid'; 
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"   
 import logo from '../../assets/rect1.png'
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen)
  } 
  const Button1 = styled(Button)(({ theme })=>({
    color:'white', 
    // color:'#f29860', 
    paddingRight:'20px' ,
    fontSize:'14px', 
    marginTop:'-35px',
    
       
  }))
  return (
    <div className='princyHeader'>
       <AppBar position="static" sx={{background:'#24336A', boxShadow: 'none',padding:'100px 0 0 0'}}>
        <Grid container>
          <Grid  item lg={2} sm={3} xs={1}>
          <img src= {logo} alt="logo" className='logoHeader'/>
          <p className='logoPara'>Logo</p>
          </Grid>
          <Grid item lg={10} className="buttons1" >
          <Button1 className='pribut1  active'  >PLATFORM </Button1> 
              <Button1 className='pribut1'>SOLUTIONS</Button1> 
            <Button1 className='pribut1'>PARTNERS</Button1> 
       <Button1 className='pribut1'>COMPANY</Button1> 
            <Button1 className='pribut1'>BLOGS</Button1> 
             <Button1 className='pribut1'>CAREERS</Button1> 
             <Button1 className='pribut1'>SIGN IN</Button1>
             <Button1 className='pribut1 reqbut'>REQUEST A DEMO</Button1>

          </Grid>
          <Grid item sm={1} xs={1} className="res_nav">
            <item>
                    
      <button className="uk-button uk-button-default open__button" type="button" uk-toggle="target: #offcanvas-flip"
        onClick={handleToggle}>{navbarOpen ? 
          (
            <MdClose style={{ color: "white", width: "40px", height: "40px" }} />
          ) 
          : (
            <FiMenu style={{ color: "white", width: "40px", height: "40px" }} />
          )
      
   

           } </button>
           
<div id="offcanvas-flip"  uk-offcanvas="flip: true; overlay: true" className='off__canvas'>
    <div className="uk-offcanvas-bar off__canvasbody" >  
    <div class="uk-inline">
    
    
     </div>
   
    <ul className='listNav'> 
            <li className='listItemNav '  > <span className='whiteClr platformList'>PLATFORM </span>  </li>  
           <hr className='lineNav'></hr>
           <li className='listItemNav '> <span className='whiteClr soluList'>SOLUTIONS</span>  </li>   
            <hr className='lineNav'></hr>
             <li className='listItemNav partList'>  <span className='whiteClr'>PARTNERS</span>  </li>     
           <hr className='lineNav'></hr>
            <li className='listItemNav compList'>   <span className='whiteClr'>COMPANY</span>  </li>   
            <hr className='lineNav'></hr>
            <li className='listItemNav blogList'><span className='whiteClr'>BLOGS</span>  </li>   
            <hr className='lineNav'></hr>
            <li className='listItemNav careersList'>  <span className='whiteClr'>CAREERS </span> </li>    
            <hr className='lineNav'></hr>
            <li className='listItemNav signList'> <span className='whiteClr'>SIGN IN</span> </li>    
            <hr className='lineNav '></hr>
            <li className='listItemNav demoList'> <span className='whiteClr reqbut'>REQUEST A DEMO</span> </li>    
            <hr className='lineNav'></hr>
           
      </ul>
      
    </div>
    </div>
            </item>
          </Grid>
        </Grid>
    </AppBar>
    </div>
  )
}

export default Header


