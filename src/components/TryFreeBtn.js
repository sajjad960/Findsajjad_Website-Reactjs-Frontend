import React from 'react'
import styled from 'styled-components'

export const TryFreeBtn = () => {
    return (
        <Wrapper>
            <button>Try it free</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
   button {
       background-color: white;
       color: black;
       padding: .8rem 2rem;
       border-radius: 50px 50px 50px 50px;

   }
`