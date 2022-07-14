import Navigation from "../Nav";

function Header(props) {
  const { setNavSelection } = props;

  return (
    <header className="navHead">
      <Navigation
        setNavSelection={setNavSelection}
      ></Navigation>
    </header>
  );
}

export default Header;

