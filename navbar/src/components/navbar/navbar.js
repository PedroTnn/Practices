import React, { useState } from "react";
import {
  Logo,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
  NavbarContainer,
  Wrapper,
} from "./navbar.elements";
import {
  FaDelicious,
  FaBars,
  FaAppleAlt,
  FaAtlas,
  FaBolt,
  FaBiohazard,
  FaTimes,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
const Navbar = () => {
  const [MobileMenu, setMobileMenu] = useState(false);

  return (
    <NavbarContainer>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <Logo>
            <FaDelicious />
            <p>TikalWeb</p>
          </Logo>
          <MobileIcon onClick={() => setMobileMenu(!MobileMenu)}>
            {MobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <Menu open={MobileMenu} onClick={() => setMobileMenu(!MobileMenu)}>
            <MenuItem>
              <MenuItemLink>
                <div>
                  <FaAppleAlt />
                </div>
                Inicio
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <div>
                  <FaAtlas />
                </div>
                Portfolio
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <div>
                  <FaBolt />
                </div>
                Servicios
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink>
                <div>
                  <FaBiohazard />
                </div>
                Contacto
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </NavbarContainer>
  );
};

export default Navbar;
