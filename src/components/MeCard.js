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

                <div className="social_links">
                    socail links
                </div>

            </div>

            <div className="text_area">
                <div className='text_area-box'>
                    Hi!
                    Me = Sajjad 🤪. <br/>
                    I can work as a Frontend and Backend developer.
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 3.5% 3% .5% 4%;

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

    //animation

    @keyframes widthBig {
    0% {
      opacity: 1;
      width: 3%; }
    100% {
      opacity: 1;
      width: 90%; } }
    
`