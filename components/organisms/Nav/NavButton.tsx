import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { handleRouting } from "../../../redux/reducers/navReducer";
import { INavButton } from "../../../interfaces/INavButton";
import { NavButtonStyle } from "./style";

export const NavButton: React.FC<INavButton> = ({
  text,
  route,
  iconFilled,
  iconOutline,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedRoute = useSelector((state: RootState) => state.nav.route);
  const [selected, setSelected] = useState(selectedRoute === route);

  useEffect(() => {
    setSelected(selectedRoute === route);
  }, [selectedRoute, route]);

  const handleClick = () => {
    dispatch(handleRouting(route));
    router.push(route);
  };
  return (
    <>
      <NavButtonStyle>
        <div className={"imageContent"} onClick={handleClick}>
          <Image
            src={selected ? iconFilled : iconOutline}
            alt={text}
            width="30"
            height="30"
          />
        </div>
        <span>{text}</span>
      </NavButtonStyle>
    </>
  );
};
