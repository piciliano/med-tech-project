import { BannerAnimated } from "../../components/banner-animated"
import { Emphasis } from "../../components/emphasis";
import * as C from "./styles"

export const Home = () => {
  return (
    <C.Container>
      <BannerAnimated />
      <Emphasis/>
    </C.Container>
  );
};
