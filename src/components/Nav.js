import React from 'react'
import styled from 'styled-components'

export default function Nav() {
  return (
    <div>
      <StyledNav>
        <h1><a id="logo" href="#">Capture</a></h1>
        <ul>
          <li>
            <a href="#">1. About Us</a>
          </li>
          <li>
            <a href="#">2. Our Work</a>
          </li>
          <li>
            <a href="#">3. Contact Us</a>
          </li>
        </ul>
      </StyledNav>
    </div>
  )
}

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 10;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`
