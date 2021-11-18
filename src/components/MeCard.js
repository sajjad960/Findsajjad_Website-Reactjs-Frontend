import React from 'react'
import styled from 'styled-components'
import { SocialIcon } from 'react-social-icons';
import me from '../assets/img/me/me.jpeg'

export const MeCard = () => {

    return (
        <Wrapper>
            <main className='container'>

                <div className="grid">

                    <div className="photo_area">
                        <h2 className='mern-text'>I am MERN stack developer</h2>
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

                                <div className='currently-me'>
                                    <h3>Currently Working On : <span>React Js, Node Js/Express Js, MongoDB.</span></h3>
                                    <h3>Currently Learning : <span>Linux, Nginx, Digitalocean{'(Cloud)'}.</span></h3>

                                    <div className='socials-links'>
                                    <SocialIcon className='social-btn' bgColor='#1185df' fgColor='white' url="https://twitter.com/jaketrent" url='https://web.facebook.com/profile.php?id=100036893913011' target = "_blank" />
                                    <SocialIcon className='social-btn' url="https://twitter.com/SajjadH40513194" target = "_blank" />
                                    <SocialIcon className='social-btn' bgColor='#FFFAF0' url="https://github.com/sajjad960" target = "_blank"/>
                                    <SocialIcon className='social-btn' bgColor='#FFFAF0' url="mailto:heybrosajjad@gmail.com" target = "_blank"/>
                                    </div>
                                </div>

                                {/* <h4 className='thank_text'>Thank You.</h4> */}
                            </div>
                        </div>
                    </div>

                </div>

            </main>
        </Wrapper>
    )
}

const Wrapper = styled.div`

.container {
    padding: 3.5% 3% .5% 10%;
}
    
    .hr {
        margin-bottom: 1rem;
        margin-left: 2rem;
        border-top: 1px solid #45a733d6;
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
            padding-top: 14% !important;
            padding: 1.5rem;

            p {
                font-size: 2.1rem;
                color: white;
                margin-bottom: 2rem;

                span {
                    color: var(--clr-red-dark);
                    font-size: 2.4rem;
                }
            }

            h3 {
                margin-top: .5rem;
                font-weight: 400;
                font-size: 1.8rem;
                color: var(--clr-green-light);

                span {
                    color: white;
                    font-size: 1.6rem;
                }
            }

        }

    }

    .socials-links {
        margin-top: 1rem;
    }

    .social-btn {
        margin-right: .5rem;

        
    }

    .mern-text {
        background-image: linear-gradient(var(--clr-red-dark), var(--clr-green-light));
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        font-size: 1.6rem;
    }

    /* .thank_text {
        margin-top: 2rem;
        font-size: 2rem;
        font-style: italic;
        font-weight: 400;
    } */


    //animation

    @keyframes widthBig {
    0% {
      opacity: 1;
      width: 3%; }
    100% {
      opacity: 1;
      width: 90%; } }


        //responsive

        @media(max-width: 1900px) {
            .text_area-box {
                padding-top: 10% !important;

                p {
                font-size: 1.9rem;

                span {
                    font-size: 2.3rem;
                }
                }

                h3 {
                font-size: 1.4rem;

                span {
                   
                    font-size: 1.5rem;
                }
                }
            }
        }


        @media(max-width: 1600px) {
            .text_area-box {
             

                p {
                font-size: 1.7rem;
                    span {
                        font-size: 2.1rem;
                    }
                
                }

                h3 {
                font-size: 1.4rem;

                    span {
                    
                    font-size: 1.3rem;
                }
                }
            }

            .me {
                width: 65%;
            }
        }


        @media(max-width: 1300px) {
            .text_area-box {
             

             p {
             font-size: 1.5rem;
                span {
                            font-size: 1.9rem;
                    }
             
             }

             h3 {
             font-size: 1.2rem;

                 span {
                 
                 font-size: 1.1rem;
             }
             }
         }

            .me {
                width: 80%;
            }
        }

        @media(max-width: 900px) {
            .text_area-box { 

                padding: .7rem;
            }
            .container {
                padding: .2%;
            }

            .me {
                width: 100%;
                padding: .5rem;
            }
        }
    
`