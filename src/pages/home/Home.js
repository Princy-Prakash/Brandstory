import React from 'react'
import './Home.css'
import lines from '../../assets/lines2.png'
import lap from'../../assets/lap.png'
import vector from '../../assets/Vector.png'
import lines2 from '../../assets/lines.png'
import money from '../../assets/money.png'
import girl from '../../assets/girl.png'
import girllap from '../../assets/girllap.png'
import rectslide from '../../assets/rectslide.png'
import { Grid } from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Slider from "react-slick"; 
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#077F8D",zIndex:"1"  }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#077F8D",zIndex:"1" }}
      onClick={onClick}
    />
  );
}
const Home = () => {

  const settings2 = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slides',
    initialSlide: 0,
  }
  const settings = {
    dots:false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows:true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: 'slides',
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 427,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      },
    ]
    // autoplay:true
  };
  return (
    <div className='home'>
      <Grid container className='firstCont'>
        <Grid item md={5} xs={12} className="contentone">
        <h1 className='firstHead'>Quis Ipsum Cea Lorem Ipsum</h1>
            <p className='firstpara'> Company provides lenders, businesses with 
                actionable credit intelligence on private entities they 
                need to improve trust and increase their lending and 
                trading activity.</p>
                <p className='firstpara2'>Watch in Action</p>
        </Grid>
        <Grid item md={5} xs={12} className="contFrstImage">
        <img src={lines} alt="lines" className='lineImage' />
          <img src={lap} alt="lap"  className='lapImage'/>
          </Grid>
      </Grid>
      <div className='secondCont'>
          <p className='indPara'>INDUSTRIES</p>
          <Grid container>
            <Grid item xs={3}   className='secondRow'>
              <img src={vector} alt="vector" className='vector'></img>
            </Grid>
            <Grid item xs={3}  className='secondRow'>
              <h4 className='links'>CEea elit quis</h4>
              </Grid>
              <Grid item xs={3}   className='secondRow'>
              <h4 className='links'>Eea elit quis</h4>
              </Grid>
              <Grid item xs={3}  className='secondRow'>
              <h4 className='links'>Eea elit quis</h4>
              </Grid>
          </Grid>
          <hr className='horiLine'></hr>
          <Grid container>
            <Grid item md={4} xs={12} className='secondConts'>
                  <h4 className='tagline'>Tagline Content Line Goes Here</h4>
                  <p className='company'>Company provides lenders, businesses with 
                    actionable credit intelligence on private entities 
                    they need to improve trust and increase their 
                    lending and trading activity</p>
                    <p className='solutions'>VIEW SOLUTIONS <hr className='paraLine'></hr></p>
            </Grid>
            <Grid item md={4} xs={12} className='secondConts'>
              <img src={lines2} className="lines2" alt="images"></img>
              <img src={girl} className="girl"  alt="images"></img>
              <img src={money} className="money"  alt="images"></img>
              <div className='whtRect'>
              <Card sx={{ maxWidth: 345 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" className='lizard'>
        solution name
        </Typography>
        <Typography variant="body2"   className='case'>
        Case Study Line Goes Here.
Can be two lines also
        </Typography>
      </CardContent>
      <CardActions>
        <Button   className='butts' >Learn More</Button>
        <Button   className='butts'>Watch Video</Button>
      </CardActions>
    </Card>
              </div>
              </Grid>
          </Grid>
          </div>
          <div className='homeSlider'>
    <Slider {...settings}>
      <div>
      <Card  className="card1">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card2">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card3">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card4">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card1">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card2">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card3">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
      <div>
      <Card  className="card4">
      <CardMedia
        component="img"
        className='cardImage'
        image={rectslide}
        alt="green iguana"
      />
      <CardContent>
        
        <Typography variant="body2"  className='cardpara'>
        Eea elit quis
exercitation culpaea
elit quis exercitation
culpaea elit quis
exercitation culpa
        </Typography>
      </CardContent>
      <CardActions> 
        <Button size="small" className='cardBut'>Read More</Button>
      </CardActions>
    </Card>
      </div>
    </Slider>
  </div>
  <div className='homeslider2'>
    <Slider {...settings2}>
      <div>
        <Card className='seccard1'>
        <svg  className='waves' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#80C5E8" fill-opacity="1" d="M0,224L24,192C48,160,96,96,144,74.7C192,53,240,75,288,101.3C336,128,384,160,432,160C480,160,528,128,576,138.7C624,149,672,203,720,208C768,213,816,171,864,138.7C912,107,960,85,1008,96C1056,107,1104,149,1152,144C1200,139,1248,85,1296,80C1344,75,1392,117,1416,138.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
          <div className='rectwaves'></div>
          <Grid container>
            <Grid item xs={6}>
              <img src={girllap} alt="girllap" className='girllap'></img>
            </Grid>
            <Grid item xs={6}>
              <p className='cardsecPara'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget
non purus cursus mauris et nullam lorem. Facilisi nisl, aliquam dui
suspendisse id vitae in. Aenean elementum ipsum viverra purus.”</p>
<h6 className='cardSecHead'>- Lorem ipsum</h6>
            </Grid>
          </Grid>
        </Card>
      </div>
      <div>
      <Card className='seccard2'>
        <svg  className='waves2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#80edc0" fill-opacity="1" d="M0,224L24,192C48,160,96,96,144,74.7C192,53,240,75,288,101.3C336,128,384,160,432,160C480,160,528,128,576,138.7C624,149,672,203,720,208C768,213,816,171,864,138.7C912,107,960,85,1008,96C1056,107,1104,149,1152,144C1200,139,1248,85,1296,80C1344,75,1392,117,1416,138.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
          <div className='rectwaves2'></div>
          <Grid container>
            <Grid item xs={6}>
              <img src={girllap} alt="girllap" className='girllap'></img>
            </Grid>
            <Grid item xs={6}>
              <p className='cardsecPara'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget
non purus cursus mauris et nullam lorem. Facilisi nisl, aliquam dui
suspendisse id vitae in. Aenean elementum ipsum viverra purus.”</p>
<h6 className='cardSecHead'>- Lorem ipsum</h6>
            </Grid>
          </Grid>
        </Card>
      </div>
      <div>
      <Card className='seccard3'>
        <svg  className='waves3' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#da80e8" fill-opacity="1" d="M0,224L24,192C48,160,96,96,144,74.7C192,53,240,75,288,101.3C336,128,384,160,432,160C480,160,528,128,576,138.7C624,149,672,203,720,208C768,213,816,171,864,138.7C912,107,960,85,1008,96C1056,107,1104,149,1152,144C1200,139,1248,85,1296,80C1344,75,1392,117,1416,138.7L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"></path></svg>
          <div className='rectwaves3'></div>
          <Grid container>
            <Grid item xs={6}>
              <img src={girllap} alt="girllap" className='girllap'></img>
            </Grid>
            <Grid item  xs={6 }>
              <p className='cardsecPara'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames
elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget
non purus cursus mauris et nullam lorem. Facilisi nisl, aliquam dui
suspendisse id vitae in. Aenean elementum ipsum viverra purus.”</p>
<h6 className='cardSecHead'>- Lorem ipsum</h6>
            </Grid>
          </Grid>
        </Card>
      </div>
      
    </Slider>
  </div>
    </div>
  )
}

export default Home

