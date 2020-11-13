function Header({ tasksQuantity }) {
  return (
    <div className="header">
      <h2>Hello in Todo List App!</h2>
      <p>
        <i>
          Youe have: <b>{tasksQuantity}</b> todos
        </i>
      </p>
    </div>
  );
}

export default Header;
