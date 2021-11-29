import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

const Bip = () => {

     // animated svg area start
     const animationcontainer = useRef(null)

     useEffect(() => {
           
         fetch('https://assets10.lottiefiles.com/packages/lf20_yigwlgip.json').then(async response => {
             const animationData = await response.json();
             console.log(response);
              let animation = Lottie.loadAnimation({
                 container: animationcontainer.current,
                 renderer: 'svg',
                 loop: true,
                 autoplay: true,
                 animationData
               })

               animation.setSpeed(1.2);
         })

   }, []);

    return (
        <Wrapper>
             <div className="animation_area">
                <div className="animationcontainer" ref={animationcontainer}></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    position: relative;

    .animationcontainer {
        display: block;
        position: absolute;
     
        /* margin-top: -5vh; */
        left: 0%;

        transform: translate(-50%, -50%);
        text-align: center; 
        width: 80vw;
        filter: grayscale();
        opacity: .4;
        
    }

`


export default Bip