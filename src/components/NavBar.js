import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assets/img/logo.png'
import { TryFreeBtn } from '../components'
import { links } from '../Data/constant'


export const NavBar = () => {
    return (
        <Wrapper>
            <div className="navbar-container">
            <div className="logo-area">
                <Link to='/'>
                <img src={logo} alt="" className='logo'/>
                </Link>
            </div>

            <div className="nav-area">
                <ul className="nav-area_links">
                    {
                        links.map((link) => {
                            const {id, text, url} = link
                            return (
                                <li key={id}>
                                    <Link className='nav-area_link' to={url}>{text}</Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <TryFreeBtn/>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: #000;
    position: relative;
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
     width: 4rem;
     height: 4rem;
      padding: 2rem;

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
`