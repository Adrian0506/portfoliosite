import React from 'react'
import styled from "styled-components";

const About = () => {
 return (
   <Container>
   <Title>Skills</Title>
   <SkillsContainer>
    <Skill><SkillImg src = './javascript.png'></SkillImg></Skill>
    <Skill><SkillImg src = './typescript.png'></SkillImg></Skill>
    <Skill><SkillImg src = './react.png'></SkillImg></Skill>
    <Skill><SkillImg src = './nodejs.png'></SkillImg></Skill>
    <Skill><SkillImg src = './database.png'></SkillImg></Skill>
   </SkillsContainer>

   <SkillsContainer>
    <Skill><SkillImg src = './jquery.png'></SkillImg></Skill>
    <Skill><SkillImg src = './webpack.png'></SkillImg></Skill>
    <Skill><SkillImg src = './python.png'></SkillImg></Skill>
    <Skill><SkillImg src = './mongodb.png'></SkillImg></Skill>
   </SkillsContainer>
   </Container>
 )

}


window.addEventListener('scroll', function(e) {
   var y = window.scrollY;
   console.log(y)
});

const LineText = styled.h3`

    background: #fafafa;
    position: absolute;
    top: -10px;
    left: 50%;
    margin-left: -150px;
    width: 300px;
    text-align: center;
    display: block;
    color: #666666;
    text-transform: uppercase;
    font-size: 14px;
    font-size: 1.4rem;
    font-weight: normal;
    letter-spacing: 1px;
    padding: 0px;

`
const SkillImg = styled.img`
display: block;
margin-left: auto;
margin-right: auto;
width: 60%;
position: relative;
top: 20%;
`
const Skill = styled.div`
position: relative;
background-color: white;
width: 5vw;
border-radius: 50%;
height: 5vw;
overflow-y: hidden;

`

const SkillsContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
gap: 3vw;
margin: 2vw 2vw 2vw 2vw;

`

const FlexWidth = styled.div`
width: 10vw
`
const Line = styled.div`
border: none;
border-bottom: 1px solid rgba(0,0,0,.1);
margin: 1em auto;
width: 50%;
}
}

`
const Title = styled.h1`
color: white;
font-size: 2vw
`
const Container = styled.div`
 display: flex;
 flex-direction: Column;
 background-color: #7b7fda;
`
export default About;