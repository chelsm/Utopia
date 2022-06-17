import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const PageTwo = styled.div`
  order: 2;
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  *{
    transition: 2s;
  }
  .stars{
    height: 150px;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .utopia_door{
    height: 540px;
  }
  .waves{
    position: absolute;
    bottom: 5%;
    left: 5%;
    height:60px
  }
  .curve_line{
    position: absolute;
    top: 10%;
    width: 100%
  }
  .flower{
    z-index: 1;
    position: absolute;
    top: 25%;
    right: 8%
  }
  .big_cercle{
    z-index: 0;
    position: absolute;
    top: 30%;
    right: 5%
  }
  .small_cercle{
    z-index: 0;
    height: 87px;
    position: absolute;
    top: 38%;
    right: 30%
  }
  .state {
    width: 90%;
    text-align:center;
    letter-spacing: 10px;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    margin: 0;
    font-size: 4rem;
    font-family: Utopia;
    top: 60%;
  }
  .aboutUs {
    width: 90%;
    font-family: RobotoReg;
    color: #fff;
    position: absolute;
    margin: 0;
    font-size: 20px;
    top: 70%;
    text-align: center;
  }
  span {
    font-weight: 900;
    font-size: 30px;
  }
  @media (max-width: 640px) {
    .state{
      top: 58%;

      font-size:2rem;
    }
    .aboutUs{
      top: 65%;
      font-size:18px;
      span{
      font-size:18px;
      }
    }
    .borderDoor{
      height: 340px;
    }
    .utopia_door{
      height: 340px;
    }
    .stars{
      height: 140px;
      top: 7%;
      left: 10%;
    }
    .waves{
      bottom: 15%;
      left: 15%;
      height:50px
    }
    .curve_line{
      top: 20%;
    }
    .big_cercle{
      height: 85px;
      top: 20%;
      right: 5%;
    }
    
    .flower{
      top: 24%;
      height: 75px;
      right: 16%;
    }
    .small_cercle{
      height: 60px;
      top: 85%;
      right: 5%;
    }
    

  }
  
`;

export default function LandingTwo() {
  return (
        <PageTwo>
        <img className='stars' src="/img/stars_icon.svg" alt="stars img" />
        <img className='waves' src="/img/waves_icon.svg" alt="waves img" />
        <img className='utopia_door' alt="logo" src="img/utopia_door.svg"/>
        <img className='curve_line' alt="logo" src="img/curve_line.svg"/>
        <img className='flower' alt="logo" src="img/flower_icon.svg"/>
        <img className='big_cercle' alt="logo" src="img/cercle_icon.svg"/>
        <img className='small_cercle' alt="logo" src="img/cercle_icon.svg"/>

        <h1 className='state'>
          En construction
        </h1>
        <p  className='aboutUs'>
          Utopia est une agence digitale qui vous propose <br/> 
          <span> des solutions digitales innovantes </span>
        </p>
           
        </PageTwo>
  )
}
