import { useState, useEffect } from "react";
import * as C from "./styles";
import { ListHeader } from "../../../utils/header-list";
import buttonHeader from "../../assets/images/menusidebarwhite.png";
import { MenuVisible } from "../menu-options-header";
import { useNavigate } from "react-router-dom";
import MedTechImg from "../../assets/images/medtech.jpg";

export const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [btnMenu, setBtnMenu] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (title: string) => {
    if (title === "Login") {
      navigate("/loginarea");
    } else if (title === "Home") {
      navigate("/");
    }
  };

  const handleClick = () => {
    setBtnMenu(!btnMenu);
  };

  const checkView = () => {
    setBtnMenu(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <C.Container>
        {windowWidth < 450 && (
            <C.MenuButton onClick={handleClick} src={buttonHeader} />
        )}
        <C.Right>
          <C.MedTechLogo onClick={() => navigate('/')} src={MedTechImg} />
        </C.Right>
        {windowWidth > 450 && (
          <C.Right>
            <ul>
              {ListHeader.map((item) => (
                <li key={item.id} onClick={() => handleNavigation(item.title)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </C.Right>
        )}
      </C.Container>
      <MenuVisible btnMenu={btnMenu} checkView={checkView} />
    </>
  );
};
