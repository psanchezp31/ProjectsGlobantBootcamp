import img from "../src/images/elon_musk.jpg";
import { Footer } from "./Footer";

export const MagazineBackground = () => {
  return (
    <div id="cover-magazine">
      <div class="image" role="img" aria-label="cover Elon Musk">
        <img class="background" src={img} alt="cover Elon Musk" />
      </div>

      <Footer classes={{ aside: "paragraphs-content-right to-uppercase" }} />
    </div>
  );
};
