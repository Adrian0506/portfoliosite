import React from 'react';
import styled from "styled-components";
import NavBar from './Navbar.jsx'
import anime from 'animejs'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import About from './About.jsx'
import Contact from './Contact.jsx'
import { Link } from 'react-router-dom';
function App() {
  return (
    <Apps>
     <Container>
       <NavBar/>
       <h1 className = 'test'>About me </h1>
       <BoardContainer>
       <Card2 className = 'left'>
         <Title>Adrian</Title>
       <ProfileImage src = "avatar.png"/>
       <ProfileText>
       <i>I have been coding ever since I was 16. Ever since I wrote my first few lines of code I instantly fell in love with it and knew I wanted my career based off coding.
       </i>
       </ProfileText>
       </Card2>
       <Right className = 'Right' >
      <Title>Let's work together.</Title>
      <ContactMe>Contact</ContactMe>
         </Right>
       <Bottom className = 'Bottom'>
       <Image src = './github.png' href = 'www.google.com'className = 'contact' onClick = {(e) => {
         e.preventDefault()
         window.open('http://github.com/adrian0506', '_blank')
       }} />
       <Image src = './email.png' className = 'contact'/>
       <Image src = './linkedin.png' className = 'contact' onClick = {(e) => {
         e.preventDefault()
         window.open('https://www.linkedin.com/in/adrian-ibarra1/', '_blank')
       }}/>
       <Image src = './google.png' className = 'contact'/>
      </Bottom>

       </BoardContainer>
     </Container>
     <Projects>
       <ProjectText className = 'animateProject'>P</ProjectText>
       <ProjectText className = 'animateProject'>r</ProjectText>
       <ProjectText className = 'animateProject'>o</ProjectText>
     <ProjectText className = 'animateProject'>j</ProjectText>
     <ProjectText className = 'animateProject'>e</ProjectText>
     <ProjectText className = 'animateProject'>c</ProjectText>
     <ProjectText className = 'animateProject'>t</ProjectText>
     <ProjectText className = 'animateProject'>s</ProjectText>
     </Projects>

 <CardContainer>
    <CardHolder className = 'animateCard'>
      <CardItem>
      <div className="card_image"><img className = 'imageResize' src="./covid.png"/></div>
         <CardContent>
         <CardTitle>Covid Tracker</CardTitle>
         <CardText>I made a covid tracker using react native. Users can track cases based on there state and also save a location they favor. There is a graph that shows daily increase or decrease in cases.</CardText>
         <CardButton onClick = {(e) => {
           e.preventDefault()
           window.open('https://github.com/Adrian0506/Covid-Tracker-React-Native', '_blank')
         }}>Code</CardButton>
         <CardButton onClick = {(e) => {
           e.preventDefault()
           window.open('https://www.youtube.com/watch?v=ylCyLwZ31XY&feature=youtu.be', '_blank')
         }}>Demo</CardButton>

         </CardContent>
      </CardItem>
      </CardHolder>

      <CardHolder className = 'animateCard'>
      <CardItem>
      <div className="card_image"><img className = 'imageResize' src="./amazon.png"/></div>
         <CardContent>
         <CardTitle>Congo Prime</CardTitle>
         <CardText>A clone of a popular e-commerence site review section. This was made with a group. I was assigned the review sections and in the end we connected all our modules together.</CardText>
         <CardButton onClick = {(e) => {
              e.preventDefault()
              window.open('https://github.com/Team-10-Thors-Hammer/adrian-services', '_blank')
         }}>Code</CardButton>
         <CardButton onClick = {(e) => {
           e.preventDefault()
           window.open('https://adrian0506.github.io/Reviews-section/', '_blank')
         }}>Demo</CardButton>

         </CardContent>
      </CardItem>
      </CardHolder>


      <CardHolder className = 'animateCard'>
      <CardItem>
      <div className="card_image"><img className = 'imageResize' src="./newrelic.png"/></div>
         <CardContent>
         <CardTitle>Scalify</CardTitle>
         <CardText>Horizonatlly scaled a website that included database with 10 million records. Used nginx to load balance users. Stress tested website and had a 0% error rate with over 1000 requests P/S. </CardText>
         <CardButton onClick = {(e) => {
           e.preventDefault()
           window.open('https://github.com/Arrays-of-Sunshine/adrian-service', '_blank')
         }}>Code</CardButton>
         <CardButton>Demo</CardButton>
         </CardContent>
      </CardItem>
      </CardHolder>

</CardContainer>

<About></About>
<Contact></Contact>
    </Apps>
  );
}





setTimeout(() => {
  anime({
    targets: document.querySelectorAll('.ani'),
    translateY: 100,
    opacity: [0, 1],
    delay: anime.stagger(100)
  })

 // Idea element comes from top side and left
  anime({
    targets: document.querySelector('.test'),
    translateY: 100,
    opacity: [0,1],
    easing: 'easeInOutQuad',
    duration: 1200
  })

  anime({
    targets: document.querySelector('.left'),
    translateX: 20,
    easing: 'easeInOutQuad',
    opacity: [0,1],
    duration: 800
  })


  anime({
    targets: document.querySelector('.Bottom'),
    translateY: -90,
    easing: 'easeInOutQuad',
    opacity: [0,1],
    duration: 800
  })

  anime({
    targets: document.querySelector('.Right'),
    translateX: -60,
    easing: 'easeInOutQuad',
    opacity: [0,1],
    duration: 800
  })

  }, 1000)



  setTimeout( () => {
    anime({
      targets: document.querySelectorAll('.contact'),
      translateX:20,
      delay: anime.stagger(200),
      opacity: [0, 1]
    })




  }, 2200)


  let played = false;
  window.addEventListener('scroll', function(e) {
    var y = window.scrollY;
    console.log(y)

    if (y >= 1400) {
      if (played === false) {


        anime({
        targets: document.querySelectorAll('.animateProject'),
        delay: anime.stagger(200),
        width: ['1%', '2%'],
        opacity: [0,1]
      })


      anime({
        targets: document.querySelectorAll('.animateCard'),
        delay: anime.stagger(500),
        width: ['10%', '25%'],
        opacity: [0,1]
      })
      played = true
    }
    }
 });


 const ContactMe = styled.button`

 width: 15px;
 height: 10px;
 position: absolute;
 transform: translateX(60px);
 opacity: 0;
 -webkit-transition: all .25s cubic-bezier(.14, .59, 1, 1.01);
 transition: all .15s cubic-bezier(.14, .59, 1, 1.01);
 margin: 0;
 padding: 0 5px;
 `
 const ProfileText = styled.h1`
  font-size: 20px;

 `
 const CardText = styled.p`
 color: #ffffff;
 font-size: 0.875rem;
 line-height: 1.5;
 margin-bottom: 1.25rem;
 font-weight: 400;

 `

 const CardButton = styled.button`
 color: #ffffff;
 padding: 0.8rem;
 font-size: 14px;
 border-radius: 4px;
 font-weight: 400;
 display: block;
 width: 100%;
 cursor: pointer;
 border: 1px solid rgba(255, 255, 255, 0.2);
 background: transparent;
 `


const CardTitle = styled.h2`
color: #ffffff;
font-size: 1.1rem;
font-weight: 700;
letter-spacing: 1px;
text-transform: capitalize;
margin: 0px;

`
 const CardHolder = styled.li`
  width: 20%;
 `

const CardContent = styled.div`

  padding: 1rem;
  background: linear-gradient(to bottom left, #7b7fda 40%, #7b7fda 100%);


`
  const ProfileImage = styled.img`
   width: 200px;
   border-radius: 50%;
  `
  const Image = styled.img`
  position: relative;
  top:5%;
   width: 5vw;
   height: 5vw;
   opacity: 0;
   cursor: grab;
   `
  const Projects = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    `

  const ProjectText = styled.h1`
  font-size: 3vw;
  `
  const FlexContainer = styled.div`
   display: flex;
   flex-direction: column;
  `

  const Title = styled.div`
   color: #7b7fda;
   font-size:2vw;
   font-weight: bold;
  `
  const Card2 = styled.div`

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 18%;
    border-radius: 25px;
    background-color: white;
    height: 30vw;
    opacity: 0;
    box-shadow: 1px 2px 5px black;


  `

  const CardItem = styled.ul`
  background-color: white;
  border-radius: 0.25rem;
  box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  `
  const CardContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style: none;
    margin: 0 5vw 5vw 5vw;
    padding: 0;
  `
  const Right = styled.div`

  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 35%;
  border-radius: 25px;
  background-color: white;
  height: 30vw;

  opacity: 0;
  box-shadow: 1px 2px 5px black;


`


  const Bottom = styled.div`
  position: relative;
  left: 1rem;
  justify-content: center;
  display: flex;
  flex-direction: row;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 54%;
  gap: 7rem;
  border-radius: 25px;
  background-color: white;
  height: 6vw;
  opacity: 0;
  box-shadow: 1px 2px 5px black;


`

const Container = styled.div`
background: #7b7fda url(./tree.jpg) 50% 0 no-repeat fixed;
  height: 100rem;
`;

const Apps = styled.div`
text-align: center;

`


const BoardContainer = styled.div`
position: relative; /* or absolute */
  top: 10%;
  left:22%;
display: flex;
flex-direction: row;
flex: auto;
margin-left: auto;
margin-right: auto;
flex-flow: row wrap;
gap:100px;
flex-wrap:wrap;
`
const LetterContainer = styled.div`
position: relative;
color: white;
left: 50rem;
font-size: 3vw;
top: 5rem;
display: flex;
`

export default App;
