export const AsideLeftParagraphs = ({ classes }) => {
  return (
    <aside className={classes.asideLeft}>
      <p id="paragraph-inspire" className={classes.paragraph}>
        inspire
      </p>
      <p id="paragraph-content-one">
        Sir Jaimes Dyson:
        <br />
        The #1 secret to <br />
        his success
        <br />
      </p>
      <p id="paragraph-content-two" className={classes.paragraph}>
        Yuval Noah Harari:
        <br />
        Education in the <br />
        age of
        <abbr title="Artificial Intelligence"> AI</abbr>
        <br />
      </p>
      <p id="paragraph-content-three">
        <abbr title="Doctor">DR </abbr>
        Michio Kaku: <br />
        his vision for <br />
        tomorrow <br />
      </p>
    </aside>
  );
};
