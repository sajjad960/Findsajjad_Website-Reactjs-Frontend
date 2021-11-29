import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GetStartBtn } from './GetStartBtn';
import lottie from 'lottie-web';

const Hero = () => {
    
     // animated svg area start
     const animationcontainer = useRef(null)

     useEffect(() => {

         fetch('https://assets6.lottiefiles.com/packages/lf20_cpjhqupu.json').then(async response => {
             const animationData = await response.json();
             console.log(response);
             lottie.loadAnimation({
                 container: animationcontainer.current,
                 renderer: 'svg',
                 loop: true,
                 autoplay: true,
                 animationData
               })
         })

   }, []);
     // animated svg area end

    return (
        <Wrapper>
            <div className="container">
            <div className="text_area">
                <h2 className='text_area_heading'>Get <span>USER FRIENDLY</span>♡ <span>WEBSITE</span> or <span>WEB APP</span> for your BRAND.</h2>
                <h4 className='text_area_para'>Now the FS's experience you really want.</h4>

                <GetStartBtn/>
            </div>

            <div className="animation_area">
                <div className="svgcontainer" ref={animationcontainer}></div>
            </div>

            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background-color: black;
    padding: 1rem 0 9rem 0;

    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -7rem;
    }

    .text_area {
       width: 50%;
       margin-left: 13rem;
       margin-top: 6rem;
       animation-name: moveInLeft;
       animation-duration: 1s;
       animation-timing-function: ease-out; 
       animation-delay: 1s;
       animation-fill-mode: forwards;
       opacity: 0;
        &_heading {
            font-size: 3.8rem;
        }

        span {
            color: var(--clr-red-dark)
        }

        &_para {
            font-size: 1.6rem;
            margin-top: 1.2rem;
        }
    }

    @media (max-width: 1700px) {
        .text_area_heading {
            font-size: 3rem;
        }
        .text_area_para {
            font-size: 1.2rem;
            margin-top: .9rem;
        }
    }

    @media (max-width: 1400px) {
        .text_area_heading {
            font-size: 2.5rem;
        }
        .text_area_para {
            font-size: 1.1rem;
            margin-top: 1rem;
        }

        .text_area {
       margin-left: 9rem;
        }
    }
    @media (max-width: 1100px) {
        .text_area_heading {
            font-size: 2rem;
        }
        .text_area_para {
            font-size: 1rem;
            margin-top: 1rem;
        }

        .text_area {
       margin-left: 5rem;
        }
    }



    .animation_area { 
       width: 60%;
       margin-top: -3rem;
       margin-left: 1rem;
    }

    .svgcontainer {
        width: 85%;
       position: relative;
    }

    @media (max-width: 1700px) {
        .animation_area { 
       width: 60%;
       margin-top: -1rem;
        }
    }

    @media (max-width: 1100px) {
        .animation_area { 
       width: 60%;
       margin-top: -0rem;
       
    }
    }


    // for mobile
    //900px
    @media (max-width: 900px) {
        padding: 1rem 0 4rem 0;
      .container {
          flex-direction: column;
      }

      .text_area {
       width: 80%;
       margin-left: 3rem;
       margin-top: 9rem;
        &_heading {
            font-size: 3rem;
        }
    }
    .animation_area {
        width: 90%;
        margin-top: -3rem;
       margin-left: 5rem;
    }

  

    }

    //600px
    @media (max-width: 600px) {
        padding: 1rem 0 4rem 0;
      .container {
          flex-direction: column;
      }

      .text_area {
       width: 80%;
       margin-left: 3rem;
       margin-top: 7rem;
        &_heading {
            font-size: 2.5rem;
        }
    }
    .animation_area {
        width: 90%;
        margin-top: -3rem;
       margin-left: 5rem;
    }

    .svgcontainer {
        width: 100%;
       position: relative;
    }

    }

    //600px
    @media (max-width: 500px) {
        padding: 1rem 0 4rem 0;
     

      .text_area {
       width: 80%;
       margin-left: 1rem;
       margin-top: 7rem;
        &_heading {
            font-size: 1.7rem;
        }
    }
    .animation_area {
        width: 90%;
        margin-top: -3rem;
       margin-left: .5rem;
    }

    .svgcontainer {
        width: 100%;
       position: relative;
    }

    }

    //animation
    @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-200px); }
    80% {
      transform: translateX(10px); }
    100% {
      opacity: 1;
      transform: translate(0); } }
 
`


export default Hero