import React from 'react'
import styled from 'styled-components'

const Loading = () => {
    return (
        <Wrapper>
            <img src='https://findsajjad.com/logo.png' className='loader-logo'></img>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 0 auto;
   display: block;
    text-align: center;
    overflow-y: hidden
    ;
     .loader-logo {
            margin-top: 41vh;
             width: 5rem;
             height: 5rem;
            animation: rotate 1.5s ease infinite;
        }
    @media (max-width: 1000px) {
        .loader-logo {
            margin-left: auto;
        }
    }

    //animation
     @keyframes rotate {
    0% {
      opacity: 1;
      transform: rotate(0); }
   
    100% {
      opacity: 1;
      transform: rotate(360deg); } }
`

export default Loading
