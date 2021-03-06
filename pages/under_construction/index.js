import styled from 'styled-components'
import LandingOne from './landingOne';
import LandingTwo from './landingTwo';

const PurpleBackground = styled.div`
  height: 100vh;
  width: 200%;
  overflow-x: auto;
  scroll-direction: horizontal;
  display: flex;
  overflow-y: hidden;
`;

export default function Landing() {

  return (
        <PurpleBackground>
            <LandingOne/>
            <LandingTwo/>

        </PurpleBackground>


  )
}
