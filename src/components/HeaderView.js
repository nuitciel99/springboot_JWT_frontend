import { Link } from "react-router-dom";

function HeaderView() {
  const Logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.href = "/";
  };
  return (
    <>
      <div className="hd">
        <h1>company</h1>
        <div className="utilMenu">
          <Link to="/">home</Link>
          <Link to="/login">login</Link>
          <a
            href="javascript:void(0)"
            onClick={() => {
              Logout();
            }}
          >
            logout
          </a>
        </div>
      </div>
    </>
  );
}

export default HeaderView;
