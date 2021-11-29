import React from 'react'
import styled from 'styled-components'

export const ComingSoon = () => {
    return (
        <Wrapper>
            <div className="coming_soon_box">
                 <h1>Coming Soon...</h1>
            </div>
        </Wrapper>
    )
}


const Wrapper = styled.div`
padding: 1rem;
height: 80vh;
.coming_soon_box {
        display: block;
        position: absolute;
        top: 50%;
        left: 48%;
        transform: translate(-50%, -50%);
        text-align: center;

        h1 {
            font-size: 3rem;
            color: white;
        }
    }
`