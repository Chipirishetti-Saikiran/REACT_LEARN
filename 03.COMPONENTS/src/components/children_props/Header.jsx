// Header.js
// A simple component to serve as content for the Card.
function Header({ title, subtitle }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
}

export default Header;