export const MagazineHeader = ({ classes, title, slogan }) => {
  return (
    <>
      <h1 id="header-group" className={classes.header}>
        <span id="header-ceo">
          <abbr title="Chief Executive Officer">{title.part1}</abbr>
        </span>
        <span id="header-magazine" className={classes.spanHeader}>
          {title.part2}
        </span>
      </h1>

      <div id="slogan" className={classes.slogan}>
        {slogan}
      </div>
    </>
  );
};
