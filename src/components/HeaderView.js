import { Link } from "react-router-dom";

function HeaderView() {
  const Logout = () => {
    localStorage.removeItem("ACCESS_TOKEN");
    window.location.href = "/";
  };

  return (
    <>
      <div className="hd">
        <h1>Company</h1>
        <div className="utilMenu">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <a
            href="javascript:void(0)"
            onClick={() => {
              Logout();
            }}
          >
            Logout
          </a>
        </div>
      </div>
    </>
  );
}

export default HeaderView;
