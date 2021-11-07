import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const GetStartBtn = () => {
    return (
    <Wrapper>
        <button>
            <Link className='try_free_text'>Get Started</Link>
        </button>
    </Wrapper>
    )
}


const Wrapper = styled.div`
    position: relative;
    z-index: 500;

   button {
       background-color: var(--clr-red-dark);
        box-sizing: border-box;
       padding: 1.1rem 3.4rem;
       border-radius: 5px 5px 50px 50px;
       margin-right: 6rem;
       margin-top: 2rem;
       display: inline-block;
       border: none;
      
       cursor: pointer;
       transition: all .3s;
        
       &:hover,
       &:active {
        background-color: var(--clr-red-dark) ;
        
        box-shadow: var(--clr-green-dark) 0px 2px 50px;
      
      
        
       }
       &:hover .try_free_text {
           color: white !important;
       }
   }
/* 
   button::before {
       top: 0%;
       left: 1%;
        border: solid transparent;
        content: " ";
        height: 20px;
        width: 20px;
        border-radius: 100px 100px 0px 0px;
       background-color: var(--clr-red-dark);
       margin-top: -.6rem;
        position: absolute;
        pointer-events: none;
   } */
   .try_free_text {
    color: black;
    font-size: 1.4rem;
    text-decoration: none;
    font-weight: 500;
    display: block;
    font-family: 'Roboto', sans-serif;
    transition: all .4s;
   
    
   }

   @media (max-width: 1700px) {
       .try_free_text {
           font-size: 1.2rem;
        }
        
    }
    @media (max-width: 1400px) {
       button {
       margin-top: 1.2rem;
       }
        
    }

    @media (max-width: 900px) {
        .try_free_text {
           font-size: 1.3rem;
        }
        
    }

    @media (max-width: 500px) {
        button {
       padding: .9rem 3rem;
        }
        .try_free_text {
           font-size: 1.2rem;
        }
        
    }
`