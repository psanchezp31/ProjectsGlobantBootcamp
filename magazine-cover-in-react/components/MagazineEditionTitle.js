export const MagazineEditionTitle = ({
  classes,
  editionTitle,
  editionSubtitle
}) => {
  return (
    <div id="name-group" className={classes.div}>
      <span id="first-name">{editionTitle.first}</span>
      <span id="last-name">{editionTitle.second}</span>
      <br />
      <span id="name-subtitle">
        {editionSubtitle.first} <br />
        {editionSubtitle.second}
      </span>
    </div>
  );
};
