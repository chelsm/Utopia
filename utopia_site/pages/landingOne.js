import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components'

const PageOne = styled.div`
  width: 50%;
  order: 1;
  position: relative;
  height: 100%;
  *{
    transition: 2s;
  }
  .stars{
    height: 150px;
    position: absolute;
    top: 5%;
    left: 5%;
  }
  .waves{
    position: absolute;
    bottom: 5%;
    left: 5%;
    height:60px
  }
  .borderDoor{
    height: 540px;
    position: absolute;
    top: 50%; right: 50%;
    transform: translate(50%,-50%);
  }
  .agenceName{
    letter-spacing: 10px;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    top: 60%; right: 50%;
    transform: translate(50%,-50%);
    margin: 0;
    font-size: 10rem;
    font-family: Utopia;
  }
  @media (max-width: 640px) {
    .agenceName{
      font-size: 6rem;
    }
    .borderDoor{
      height: 340px;
    }
    .stars{
      height: 140px;
      top: 13%;
      left: 15%;
    }
    .waves{
      bottom: 15%;
      left: 15%;
      height:50px
    }
  }

`;

export default function LandingOne() {
  return (
        <PageOne>
        <img className='stars' src="/img/stars_icon.svg" alt="stars img" />
        <img className='borderDoor' src="/img/whiteborder_door.svg" alt="Utopia door img" />
        <img className='waves' src="/img/waves_icon.svg" alt="waves img" />
        <h1 className="agenceName">
            Utopia 
        </h1>
        </PageOne>


  )
}
