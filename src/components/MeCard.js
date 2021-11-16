import React from 'react'
import styled from 'styled-components'
import me from '../assets/img/me/me.jpeg'

export const MeCard = () => {

    return (
        <Wrapper>
            <div className="grid">

                <div className="photo_area">
                    <h2>I am MERN stack developer</h2>
                    <hr className='hr'/>
                    <img src={me} className='me' alt="Me" />
                 
                </div>

                <div className="about_me">
                    <div className="text_area">
                        <div className='text_area-box'>
                            <p>
                            Hi!<br/>
                            Me = Sajjad.<br/>
                            I can work as a <span>Frontend</span> and <br/><span>Backend</span> developer.
                            </p>
                        <h3>Currently Working On : <span>React Js, Node Js/Express Js, MongoDB.</span></h3>
                        </div>
                    </div>
                </div>

            </div>

        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 3.5% 3% .5% 10%;

    .hr {
        width: 2rem;
        margin-bottom: 1rem;
        margin-left: 2rem;
        margin-top: .3rem;
        transform: all 0.4s;
        animation: widthBig 2s;
        animation-fill-mode: forwards;
        animation-timing-function: ease;
       
    }


    .photo_area {
       
        text-align: center;
    }
    .me {
        width: 55%;
    }
    .grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        
    }

    .text_area {
        position: relative;
        margin-bottom: 10%;
        
        &-box {
            /* position: absolute;
            bottom: 50%;
           right: 20%; */
            margin-bottom: .5rem;
            /* background-image: linear-gradient(to right bottom, #ffffff3d, black); */
            padding-top: 15% !important;
            padding: 1.5rem;
            p {
                font-size: 2.1rem;
                color: white;

                span {
                    color: var(--clr-red-dark);
                    font-size: 2.4rem;
                }
            }

            h3 {
                font-size: 1.6rem;
                color: var(--clr-green-light);
            }

        }

    }

    //animation

    @keyframes widthBig {
    0% {
      opacity: 1;
      width: 3%; }
    100% {
      opacity: 1;
      width: 90%; } }
    
`