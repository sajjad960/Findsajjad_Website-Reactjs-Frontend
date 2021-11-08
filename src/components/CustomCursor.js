import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

export const CustomCursor = () => {
    let cursorRef = useRef(null);
    
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX,clientY} = event;

            const mouseX = clientX - cursorRef.current.clientWidth / 2;
            const mouseY = clientY - cursorRef.current.clientHeight / 2;

            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
            console.log(cursorRef.current.style.transform);
        })
    }, [])
    return (
        <Wrapper>
            <div className='app-cursor' ref={cursorRef}> </div>
            <div className="secondary-cursor"></div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .app-cursor {
        z-index: 10000;
        border-radius: 50%;
        width: 80px;
        height: 80px;
        border: 1px solid #fff; 
        pointer-events: none;
        overflow: hidden;
        transform:  translate3d(0,0,0);
        position: fixed;
    }

.secondary-cursor {
  z-index: 10000;
  width: 60px;
  overflow: hidden;
  height: 60px;
  position: fixed;
  background-color: #fff;
}
`