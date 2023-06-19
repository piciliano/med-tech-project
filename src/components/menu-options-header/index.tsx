import * as C from "./styles";
import { ListHeader } from "../../../utils/header-list";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

interface MenuVisibleProps {
  btnMenu: boolean;
  checkView: () => void;
}

export const MenuVisible = ({ btnMenu, checkView }: MenuVisibleProps) => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleNavigation = (title: string) => {
    if (title === "Login") {
      navigate("/loginarea");
      checkView();
    } else if (title === "Home") {
      navigate("/");
      checkView();
    }
  };

  const closeSideBar = () => {
    checkView();
  };

  return (
    <>
      {windowWidth < 450 && (
        <C.Container display={btnMenu ? "true" : ""}>
          <C.SubContainer>
            <C.X onClick={closeSideBar} >x</C.X>
            <ul>
              {ListHeader.map((item) => (
                <li key={item.id} onClick={() => handleNavigation(item.title)}>
                  {item.title}
                </li>
              ))}
            </ul>
          </C.SubContainer>
        </C.Container>
      )}
    </>
  );
};
