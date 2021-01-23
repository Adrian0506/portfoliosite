import React from 'react';
import styled from 'styled-components'
import Axios from 'axios'

const BackgroundBar = styled.div`
width: 80%;
background-color: #F0F2F2;
border-radius: 10px;
box-shadow: inset 0 0 0 1px #E3E6E6;
margin: 1px 0px -50px 0px;
position: relative;
left: 2rem;
`



const Bar = styled.div`
width: 92%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`

const Bar2 = styled.div`
width: 5%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`

const Bar3 = styled.div`
width: 1%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`



const Bar4 = styled.div`
width: 10%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
color: black;
border-radius: 10px;


`




const Bar5 = styled.div`
width: 1%;
height: 30px;
background-color: #FFA41C;
text-align: center;
line-height: 30px;
border-radius: 10px;
color: black;

`
const Lettering = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`
const Lettering2 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`

const Lettering3 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`

const Lettering4 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`


const Lettering5 = styled.h1`
position: relative;
top: 1rem;
left: 19rem;
font-family : 'Roboto', sans-serif;
font-weight : 500;
color: #007185;
font-size: 18px;
`



const AmazonRating = styled.h1`
color: #007185;
position: relative;
left: 0.5rem;
font-size: 15px;
font-family : 'Roboto', sans-serif;
font-weight : 500;
`
const OutOf = styled.h1`
position: relative;
left: 10rem;

font-size: 25px;
font-family: 'Roboto', sans-serif;
font-weight: 300;

`

const Stars = styled.h1 `
 position: relative;
 top: -1.2rem;
 left: -1rem;
 color: #007185;
 font-size: 15px;
 font-family: 'Roboto', sans-serif;
 font-weight: 500;
`

const Caret = styled.p`
  position: relative;
  left: -10.5rem;
  top: -7.7rem;
  color: #007185;
  transform: rotate(-90deg);
`;

class Star extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
       reviews: this.props.props,
       starRating: 0
    }
  }




  componentDidMount() {
    Axios('http://localhost:3000/reviews').then(reviews => {
       console.log(reviews.data)
       this.setState({
         reviews: reviews.data
       })
    }).then(() => {
      let star1 = 0;
      let star2 = 0;
      let star3 = 0;
      let star4 = 0;
      let star5 = 0;



      //

      for (let i = 0; i < this.state.reviews.length; i++) {
        if (this.state.reviews[i].stars === 1) {
          star1++;
        } else if (this.state.reviews[i].stars === 2) {
          star2++;
        } else if (this.state.reviews[i].stars === 3) {
          star3++;
        } else if (this.state.reviews[i].stars === 4) {
          star4++;
        } else if (this.state.reviews[i].stars === 5) {
          star5++;
        }


      }

   // then divide

   let star1Value = (star1 / this.state.reviews.length) * 100
   let star2Value = (star2 / this.state.reviews.length) * 100
   let star3Value = (star3 / this.state.reviews.length) * 100
   let star4Value = (star4 / this.state.reviews.length) * 100
   let star5Value = (star5 / this.state.reviews.length) * 100
   console.log(star5Value)
    document.querySelector('.sc-gsTCUz').style.width = `${star5Value}%`
    document.querySelector('.sc-dlfnbm').style.width = `${star4Value}%`
    document.querySelector('.sc-hKgILt').style.width = `${star3Value}%`
    document.querySelector('.sc-eCssSg').style.width = `${star2Value}%`
    document.querySelector('.sc-jSgupP').style.width = `${star1Value}%`



    document.querySelector('.sc-gKsewC').innerHTML = `${Math.floor(star5Value)}%`
    document.querySelector('.sc-iBPRYJ').innerHTML = `${Math.floor(star4Value)}%`
    document.querySelector('.sc-fubCfw').innerHTML = `${Math.floor(star3Value)}%`
    document.querySelector('.sc-pFZIQ').innerHTML = `${Math.floor(star2Value)}%`
    document.querySelector('.sc-jrAGrp').innerHTML = `${Math.floor(star1Value)}%`

    let starAvg = (5 * star5 + 4 * star4 + 3 *star3 + 2 *star2 + 1 * star1) / (star5 + star4 + star3 + star2 + star1)

    document.querySelector('.sc-iqHYGH').innerHTML = starAvg.toFixed(2);


     this.setState({
       starRating: starAvg
     })

    })





     //




    }



  render() {
   let starImage = 'star.png'

   switch (Math.floor(this.state.starRating)) {
     case 1:
      starImage = 'star.png'
     break;
     case 2:
       starImage = 'star2.png'
     break;
     case 3:
       starImage = 'star3.png'
     break;
     case 4:
       starImage = 'star4.png'
     break;
     case 5:
       starImage = 'star5.png'
     break;
   }


    return (
      <div>
        <h1 className='customerRev'>Customer reviews</h1>
        <img src={starImage} className='globalStarResize'></img>
        <OutOf>4.9 out of 5</OutOf>
        <h1 className='globalRating'>{this.state.reviews.length} global ratings</h1>
        <BackgroundBar>
          <Bar></Bar>
        </BackgroundBar>
        <Lettering>0%</Lettering>
        <Stars>5 star</Stars>
        <BackgroundBar>
          <Bar2></Bar2>
        </BackgroundBar>
        <Lettering2></Lettering2>
        <Stars>4 star</Stars>
        <BackgroundBar>
          <Bar3></Bar3>
        </BackgroundBar>
        <Lettering3></Lettering3>
        <Stars>3 star</Stars>
        <BackgroundBar>
          <Bar4></Bar4>
        </BackgroundBar>
        <Lettering4>0%</Lettering4>
        <Stars>2 star</Stars>
        <BackgroundBar>
          <Bar5></Bar5>
        </BackgroundBar>
        <Lettering5>0%</Lettering5>
        <Stars>1 star</Stars>
        <AmazonRating> <Caret>&lsaquo;</Caret> How are ratings reviewed?</AmazonRating>
      </div>
    )

  }
}









export default Star;