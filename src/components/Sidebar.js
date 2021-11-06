import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/globalContext';
import { FaTimes } from 'react-icons/fa';
import {links} from '../Data/constant'
import logo from '../assets/img/logo.png'
import { Link } from 'react-router-dom';
import { TryFreeBtn } from '.';


export const Sidebar = () => {
const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <SidebarContainer>
        <aside className={isSidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
          <div className="sidebar-header">
              <Link  to='/' onClick={closeSidebar}>
                <img src={logo} alt="logo" className="logo" />
              </Link>
            <button
              className="close-btn"
              type="button"
              onClick={() => closeSidebar()}
            >
              <FaTimes />
            </button>
          </div>
          <ul className="links">
            {links.map((link) => {
              const { id, text, url } = link;
              return (
                <li key={id} onClick={closeSidebar}>
                  <Link to={url}>{text}</Link>
                </li>
              );
            })}
            <li>
           
            </li>
          </ul>

          <div className='try_free_btn'>
            <TryFreeBtn/>
          </div>

        </aside>
      </SidebarContainer>
    );
}


const SidebarContainer = styled.div`
  
  position: relative;
  z-index: 50000;
  font-size: 1.8rem;
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 6rem 3rem 4rem;
  }
  .close-btn {
    font-size: 3rem;
    background: transparent;
    border-color: transparent;
    transition: all 0.3s linear;
    cursor: pointer;
    color: var(--clr-red-dark);
    margin-top: 0.2rem;
  }
  .close-btn:hover {
    color: var(--clr-red-light);
  }
  .logo {
    justify-self: center;
    height: 70px;
  }
  .links {
    list-style: none;
    margin-bottom: 2rem;
    margin-left: 3rem;
    
  }
  .links a {
    display: block;
    text-align: left;
    font-size: 1.5rem;
    text-decoration: none;
    text-transform: capitalize;
    padding: 1rem 1.5rem;
    color: #fff;
    transition: all 0.3s linear;
    letter-spacing: 0.1rem;
  }
  .links a:hover {
    padding: 1rem 1.5rem;
    padding-left: 2rem;
    background: var(--clr-grey-10);
    color: var(--clr-green-light);
  }
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    transition: all 0.3s linear;
    transform: translate(-100%);
    z-index: -1;
  }
  .show-sidebar {
    transform: translate(0);
    z-index: 999;
  }
  .cart-btn-wrapper {
    margin: 2rem auto;
  }

  .try_free_btn {
      position: absolute;
      bottom: 20%;
      left: 38%;
  }

  @media screen and (min-width: 900px) {
    .sidebar {
      display: none;
    }
  }
`;