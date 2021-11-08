import React, { useEffect, useRef } from 'react'
import styled from 'styled-components';

export const CustomCursor = () => {
    let mainCursor = useRef(null);
    let secondaryCursor = useRef(null);

    let positionRef = useRef({
        mouseX: 0,
        mouseY: 0,
        destinationX: 0,
        destinationY: 0,
        distanceX: 0,
        distanceY: 0,
        key: -1
    });
    
    useEffect(() => {
        document.addEventListener('mousemove', (event) => {
            const {clientX,clientY} = event;

            const mouseX = clientX - mainCursor.current.clientWidth / 2;
            const mouseY = clientY - mainCursor.current.clientHeight / 2;

            positionRef.current.mouseX = mouseX - secondaryCursor.current.clientWidth / 2;
            positionRef.current.mouseY = mouseY - secondaryCursor.current.clientHeight / 2;

            mainCursor.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
            
        })
    }, [])

    useEffect(() => {
        const followMouse = () => {
            positionRef.current.key = requestAnimationFrame(followMouse);
            const {
              mouseX,
              mouseY,
              destinationX,
              destinationY,
              distanceX,
              distanceY,
            } = positionRef.current;

            if (!destinationX || !destinationY) {
              positionRef.current.destinationX = mouseX;
              positionRef.current.destinationY = mouseY;
            } else {
              positionRef.current.distanceX = (mouseX - destinationX) * 0.1;
              positionRef.current.distanceY = (mouseY - destinationY) * 0.1;
              if (
                Math.abs(positionRef.current.distanceX) +
                  Math.abs(positionRef.current.distanceY) <
                0.1
              ) {
                positionRef.current.destinationX = mouseX;
                positionRef.current.destinationY = mouseY;
              } else {
                positionRef.current.destinationX += distanceX;
                positionRef.current.destinationY += distanceY;
              }
            }
            secondaryCursor.current.style.transform = `translate3d(${destinationX + 13}px, ${destinationY + 14}px, 0)`;
            
          };
          followMouse();
    }, [])

    return (
        <Wrapper>
            <div className="main-cursor " ref={mainCursor}>
                <div className="main-cursor-background"></div>
            </div>
            <div className="secondary-cursor" ref={secondaryCursor}>
             <div className="cursor-background"></div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    /* .app-cursor {
        z-index: 10000;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        border: 1px solid #fff; 
        pointer-events: none;
        overflow: hidden;
        transform:  translate3d(0,0,0);
        top: 2%;
        left: .8%;
        position: fixed;
    }

.secondary-cursor {
  z-index: 10000;
  overflow: hidden;
  transform:  translate3d(0,0,0);
  position: fixed;
  width: 35px;
  pointer-events: none;
  height: 35px;
  position: fixed;
  border-radius: 100px;
  background-color: #fff;
} */

.main-cursor,
.secondary-cursor {
  z-index: 10000;

  pointer-events: none;
  // overflow: hidden;
  transform: translate3d(0, 0, 0);
  position: fixed;
}

.main-cursor {
  transition: opacity 1s cubic-bezier(0.77, 0, 0.175, 1);
  animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  mix-blend-mode: difference;

  .main-cursor-background {
    width: 30px;
    height: 30px;
    background: white;
    border-radius: 50%;
  }
}

.secondary-cursor {
  width: 60px;
  height: 60px;

  .cursor-background {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px solid white;
    position: relative;
    &:after,
    &:before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: white;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
    &:before {
      left: 10px;
    }

    &:after {
      right: 10px;
    }
  }
}

.slider-drag {
  .cursor-background {
    animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
      bgUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;

    &:after {
      animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
        translateRightDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }

    &:before {
      animation: fadeIn 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards,
        translateLeftDot 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
    }
  }

  .main-cursor {
    animation: fadeOut 0.75s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }
}

.hamburger {
  .cursor-background {
    animation: fadeOut 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }

  .main-cursor-background {
    animation: scaleUp 1s cubic-bezier(0.77, 0, 0.175, 1) 0s forwards;
  }
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes bgUp {
  from {
    background-color: transparent;
  }

  to {
    background-color: black;
  }
}

@keyframes bgDown {
  from {
    background-color: black;
  }

  to {
    background-color: transparent;
  }
}

@keyframes scaleUp {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.5);
  }
}

@keyframes scaleDown {
  from {
    transform: scale(1.5);
  }

  to {
    transform: scale(1);
  }
}

@keyframes translateLeftDot {
  from {
    transform: translate(20px, -50%);
  }

  to {
    transform: translate(0px, -50%);
  }
}

@keyframes translateRightDot {
  from {
    transform: translate(-20px, -50%);
  }

  to {
    transform: translate(0px, -50%);
  }
}
`