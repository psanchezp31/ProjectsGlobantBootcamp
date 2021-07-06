//import { MagazineBackground } from "../components/MagazineBackground";
import { MagazineHeader } from "../components/MagazineHeader";
import { AsideLeftParagraphs } from "../components/AsideLeftParagraphs";
import { AsideRightParagraphs } from "../components/AsideRightParagraphs";
import { MagazineEditionTitle } from "../components/MagazineEditionTitle";
import { Footer } from "../components/Footer";
import background from "./images/elon_musk.jpg";

import "./styles.css";

export const MagazineController = () => {
  return (
    <div id="cover-magazine-wrapper">
      <div
        id="cover-magazine"
        style={{ backgroundImage: `url(${background})` }}
      >
        <MagazineHeader
          classes={{
            header: "to-uppercase",
            slogan: "white-text to-uppercase",
            spanHeader: "to-uppercase"
          }}
          title={{ part1: "ceo", part2: "Magazine" }}
          slogan={"Inspiring the business world "}
        />
        <AsideLeftParagraphs
          classes={{
            asideLeft: "paragraphs-content-left to-uppercase",
            paragraph: "white-text black-background"
          }}
        />
        <MagazineEditionTitle
          classes={{
            div: "white-text to-uppercase"
          }}
          editionTitle={{
            first: "Elon",
            second: "Musk"
          }}
          editionSubtitle={{
            first: "The extraordinary",
            second: "corporate disrupter"
          }}
        />
        <AsideRightParagraphs
          classes={{
            asideRight: "paragraphs-content-right to-uppercase"
          }}
        />
        <Footer classes={{ aside: "to-uppercase" }} />
      </div>
    </div>
  );
};
