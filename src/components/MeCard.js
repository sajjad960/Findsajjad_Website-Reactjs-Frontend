import React from 'react'
import styled from 'styled-components'
import me from '../assets/img/me/me.jpeg'

export const MeCard = () => {
    return (
        <Wrapper>
            <div className="grid">

                <div className="photo_area">
                    <img src={me} className='me' alt="Me" />
                </div>

                <div className="social_links">
                    socail links
                </div>

            </div>

            <div className="text_area">
                
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 6rem 10rem 1rem 20rem;

    .photo_area {
        height: 30rem;
        width: 30rem;
    }
    .me {
        width: 100%;
    }
    .grid {
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
        
    }
    
`