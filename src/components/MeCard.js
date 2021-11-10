import React from 'react'
import styled from 'styled-components'

export const MeCard = () => {
    return (
        <Wrapper>
            <div className="grid">

                <div className="photo_area">
                    {/* photo */}
                </div>

                <div className="social_links">
                    {/* socail links */}
                </div>

            </div>

            <div className="text_area"></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 10rem;
    
`