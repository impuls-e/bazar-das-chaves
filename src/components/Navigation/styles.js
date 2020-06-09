import styled from 'styled-components'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { Link } from 'gatsby'

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 10vh;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.14), 0 0 9px 0 rgba(44, 43, 57, 0.16);
  background-color: var(--white);
  z-index: 2;

  ul {
    visibility: hidden;
    opacity: 0;
    display: flex;
    position: absolute;
    background: var(--white);
    align-items: flex-end;
    padding: 0 4vw;
    height: 25vh;
    width: 100vw;
    transition: opacity 0.2s ease-out, visibility 0.2s ease-out,
    box-shadow 2s ease-in-out;
    z-index: -2;

    li {
      display: flex;
      align-items: center;
      height: 50px;
      margin: 1vh 0;
      padding: 3vw;
      border-radius: 0 5px 5px 0;

      a:after { 
        content: "";
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 55%;
        height: 2px;
        background-color: var(--gray);
        transition: all 0.4s ease-in-out;
      }
    }
    li:hover {
      a:after{
        background-color: var(--primary);
      }
    }
    li:nth-child(1){ 
      a {
        transition: color 0.2s ease-in, visibility 0.4s ease-in-out,
        transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
      } 
    }
    li:nth-child(2) {
      a {
        transition: color 0.2s ease-in, visibility 0.6s ease-in-out,
        transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
      }
    }
    li:nth-child(3) { 
      a {
        transition: color 0.2s ease-in, visibility 0.8s ease-in-out,
        transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
      }
    }
  }
  ul.click {
    visibility: visible;
    opacity: 1;
    li {
      a {
        transform: translateX(0);
        visibility: visible;
        opacity: 1;
      }
    }
  }
`

export const HamburguerMenu = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: visible;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 48px;
  height: 48px;
  margin-right: 4vw;

  &.click {
    div:nth-child(1) {
      transform: rotate(45deg) translate(9px, 8px);
      border: 2px solid var(--primary);
    }
    div:nth-child(2) {
      opacity: 0;
      visibility: hidden;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(10px, -10px);
      border: 2px solid var(--primary);
    }
  }

  &:hover {
    div {
      border: 2px solid var(--secondary);

    }
  }

  div {
    width: 40px;
    border: 2px solid var(--primary);
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    transform: rotate(0);

    &:nth-child(2) {
      width: 30px;
      opacity: 1;
      visibility: visible;
    }
  }
`;


export const Logo = styled(Link)`
  width: 48px;
  height: 48px;
  margin-left: 4vw;
  display: flex;

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }
`;
export const MenuLink = styled(AnchorLink)`
  position: relative;
  color: var(--gray);
  font-size: 1.5rem;
  outline: none;
  display: flex;
  text-decoration: none;
  transform: translateX(-10vw);
  visibility: hidden;
  opacity: 0;

  &:hover {
    color: var(--primary);
  }

`;