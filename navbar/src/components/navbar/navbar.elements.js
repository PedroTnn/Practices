import styled from "styled-components";

export const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #719a81;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;

  p {
    &:nth-child(2) {
      color: #fff;
    }
    &:nth-child(3) {
      font-size: 1.5rem;
      font-weight: 500;
      color: #e07924;
    }
  }
  svg {
    fill: #e07924;
    margin-right: 0.5rem;
  }

  @media screen and (max-width: 315px) {
     p {
    &:nth-child(2) {
      width: 1vw;
    }
  svg{
    width: 1vw;
  }
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 700px) {
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 90vw;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
    background-color: #252929;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 700px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.1 all ease;

  &:hover {
    color: #fff;
    background-color: #f2c953;
    transition: 0.1s all ease;

    div {
      svg {
        fill: #252929;
      }
    }
  }

  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #e07924;
      margin-left: 0.5rem;
    }
  }

  @media screen and (max-width: 700px) {
    width: 100%;
    div {
      width: 10%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 15%;

      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
    margin-left: 50%;
    align-items: center;
    cursor: pointer;
    background: red;
    svg {
      fill: #e07924;

      &:hover {
      }
    }
  } ;
`;
