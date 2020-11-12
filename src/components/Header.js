function Header({ length }) {
  return (
    <div className="header">
      <h2>Hello in Todo List App!</h2>
      <p>
        <i>
          Youe have: <b>{length}</b> todos
        </i>
      </p>
    </div>
  );
}

export default Header;
