import Lottie from 'lottie-web';
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { GetStartBtn } from '.';

export const Hero = () => {
    
     // animated svg area start
     const svgcontainer = useRef(null)

     useEffect(() => {
         Lottie.loadAnimation({
           container: svgcontainer.current,
           renderer: 'svg',
           loop: true,
           autoplay: true,
           animationData: require('../assets/svg/70654-graphic-designer.json')
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
                <div className="svgcontainer" ref={svgcontainer}></div>
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

    }
 
`