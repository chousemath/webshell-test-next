import React from "react";
import { INavButton } from "../../../interfaces/INavButton";
import { NavContainer } from "./style";
import { NavButton } from "./NavButton";

const navButtons: INavButton[] = [
  {
    iconOutline: "/images/iconHomeOutline.png",
    iconFilled: "/images/iconHomeFilled.png",
    text: "HOME",
    route: "/main",
  },
  {
    iconOutline: "/images/iconSearchOutline.png",
    iconFilled: "/images/iconSearchFilled.png",
    text: "SEARCH",
    route: "/search",
  },
  {
    iconOutline: "/images/iconPlayOutline.png",
    iconFilled: "/images/iconPlayFilled.png",
    text: "판매",
    route: "/sell",
  },
  {
    iconOutline: "/images/iconHeartOutline.png",
    iconFilled: "/images/iconHeartFilled.png",
    text: "NOTI",
    route: "/noti",
  },
  {
    iconOutline: "/images/iconUserOutline.png",
    iconFilled: "/images/iconUserFilled.png",
    text: "MY",
    route: "/my",
  },
];

const Nav: React.FC = ({}) => {
  return (
    <>
      <NavContainer>
        {navButtons.map((navButton, index) => (
          <NavButton key={`nav-button-${index}`} {...navButton} />
        ))}
      </NavContainer>
    </>
  );
};

export default Nav;
