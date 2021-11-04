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
                <img src={logo} alt="" className='logo'/>
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

    .navbar-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .logo-area {
        
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
            margin-right: 1rem;
            text-decoration: none;
            color: white;
        }
    }
`