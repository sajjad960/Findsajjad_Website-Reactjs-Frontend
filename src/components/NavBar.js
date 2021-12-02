import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import styled from 'styled-components'
import { TryFreeBtn } from '../components'
import { useGlobalContext } from '../context/globalContext'
import { links } from '../Data/constant'


export const NavBar = () => {
const { openSidebar } = useGlobalContext();
const location = useLocation();

    return (
        <Wrapper>
            <div className="navbar-container">
            <div className="logo-area">
                <Link to='/'>
                <img src={`${process.env.REACT_APP_HOST_ADDRESS}logo.png`} alt="FS" className='logo'/>
                </Link>
            </div>

            <div className="nav-area">
                <ul className="nav-area_links">
                        {
                            location.pathname !== '/' ? <li >
                            <Link className='nav-area_link' key='15' to='/'>Home</Link>
                            </li> : ''
                         }
                         
                    {
                        links.map((link) => {
                            const {id, text, url} = link
                            if(location.pathname !== url) {
                                return (
                                    <li key={id}>
                                        <Link className='nav-area_link' to={url}>{text}</Link>
                                    </li>
                                )
                            } else {
                                return ''
                            }
                            

                        })

                        
                    }
                    
                    {/* showing projects link btn */}
                    {
                            location.pathname === '/' ? <li >
                            <a className='nav-area_link'>Projects</a>
                            </li> : ''
                    }
                         
                </ul>
            </div>

            <div className='btn'>
            <TryFreeBtn/>
            </div>

            {/* for sidebar */}
            <button
            type="button"
            className="nav-toggle"
            onClick={() => openSidebar()}
          >
            <FaBars />
          </button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #000;
    position: relative;
    padding: 1rem 0;
    z-index: 5000;
    

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-area {
        margin-left: 7rem;
        transition: all 1s;
        &:hover {
            transform: rotate(360deg);
            filter: opacity(0.6);
        }
    }
    .logo {
     width: 4.5rem;
     height: 4.5rem;
     padding: 1rem;

    }

    @media (max-width: 900px) {
        .logo {
            width: 4rem;
            height: 4rem;
        }
    }
    @media (max-width: 1500px) {
        .logo {
            width: 4rem;
            height: 4rem;
        }
    }

    .nav-toggle {
        display: none;
    }

    // ul
    .nav-area {
        &_links {
            list-style: none;
    
            li {
                display: inline-block;
            }
        }
        &_link {
            margin-right: 2.5rem;
            text-decoration: none;
            color: white;
            font-weight: 500;
            font-size: 1.35rem;
            transition: all .1s;
            
            &:hover {
                border-bottom: 2px solid var(--clr-green-light);
                color: var(--clr-green-light);
            }
        }
    }

    // for sidebar
    @media (max-width: 900px) {

        .navbar-container {
            justify-content: center;
        }

      .nav-area {
          display: none;
      }

      .btn {
          display: none;
      }

      .logo-area {
        margin: 0;
      }

      .nav-toggle {
    display: block;
    background: transparent;
    border: transparent;
    color: #ffffffd4;
    cursor: pointer;
    svg {
      font-size: 3.4rem;
    }
      }
        
    }
`