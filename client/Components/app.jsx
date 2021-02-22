import React from 'react';
import styled from "styled-components";
import NavBar from './Navbar.jsx'
import anime from 'animejs'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

function App() {
  return (
    <Apps>
     <Container>
       <NavBar/>
       <h1 className = 'test'>About me </h1>
       <BoardContainer>
       <Card2 className = 'left'><Title>Adrian</Title></Card2>
       <Right className = 'Right' >
      <Title>Let's work together.</Title>
         </Right>
       <Bottom className = 'Bottom'>
       <Image src = './github.png' href = 'www.google.com'className = 'contact'/>
       <Image src = './email.png' className = 'contact'/>
       <Image src = './linkedin.png' className = 'contact'/>
       <Image src = './google.png' className = 'contact'/>
      </Bottom>

       </BoardContainer>
     </Container>
     <Projects>Projects</Projects>
 <CardContainer>
    <CardHolder className = 'animateCard'>
      <CardItem>
      <div className="card_image"><img src="https://picsum.photos/500/300/?image=17"/></div>
         <CardContent>
         <CardTitle>Covid Tracker</CardTitle>
         <CardText>I made a covid tracker using react native. Users can track cases based on there state and also save a location they favor. There is a graph that shows daily increase or decrease in cases.</CardText>
         <CardButton>Code</CardButton>
         </CardContent>
      </CardItem>
      </CardHolder>

      <CardHolder className = 'animateCard'>
      <CardItem>
      <div className="card_image"><img src="./amazon.png"/></div>
         <CardContent>
         <CardTitle>Congo Prime</CardTitle>
         <CardText>I made a covid tracker using react native. Users can track cases based on there state and also save a location they favor. There is a graph that shows daily increase or decrease in cases.</CardText>
         <CardButton>Code</CardButton>
         </CardContent>
      </CardItem>
      </CardHolder>


      <CardHolder className = 'animateCard'>
      <CardItem>
      <div className="card_image"><img src="./amazon.png"/></div>
         <CardContent>
         <CardTitle>Congo Prime</CardTitle>
         <CardText>I made a covid tracker using react native. Users can track cases based on there state and also save a location they favor. There is a graph that shows daily increase or decrease in cases.</CardText>
         <CardButton>Code</CardButton>
         </CardContent>
      </CardItem>
      </CardHolder>

</CardContainer>
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

 /* anime({
    targets: document.querySelectorAll('.animateCard'),
    delay: anime.stagger(300),
    opacity: [0,1],
    translateX: 100
  }) */


  }, 2200)


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
 text-transform: uppercase;
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

  const Image = styled.img`
  position: relative;
  top:5%;
   width: 5vw;
   height: 5vw;
   opacity: 0;
   cursor: grab;
   `
  const Projects = styled.h1`
    font-size: 2vw;
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
    margin: 0;
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
  background: #7b7fda;
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
