import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TryFreeBtn = () => {
    return (
        <Wrapper>
            <button>
                <Link className='try_free_text'>Try it free</Link>
            </button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   button {
       background-color: var(--clr-green-light);
        box-sizing: border-box;
       padding: 1.2rem 2.5rem;
       border-radius: 50px 50px 50px 50px;
       margin-right: 6rem;
       display: inline-block;
       border: none;
      
       cursor: pointer;
       transition: all .5s;
        
       &:hover,
       &:active {
        background-color: var(--clr-green-light) ;
        
        box-shadow: var(--clr-green-dark) 0px 5px 40px;
      
      
        
       }
       &:hover .try_free_text {
           color: white !important;
       }
   }
   .try_free_text {
    color: black;
    font-size: 1.3rem;
    text-decoration: none;
    font-weight: 500;
    display: block;
    font-family: 'Roboto', sans-serif;
    transition: all .4s;
   
    
   }
`