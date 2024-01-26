import { Link } from "react-router-dom";

const Navbar = ({ currentUser }) => {
  return (
    <>
      <div className="flex">
        <div className="">
          <Link to="/">Home</Link>
        </div>

        {/* If there is a user, show username and logout button */}
        {currentUser.username && (
          <div className="">
            <Link className="m-2 p2" to="/companies">
              Companies
            </Link>
            <Link className="m-2 p2" to="/jobs">
              Jobs
            </Link>

            <Link className="m-2 p2" to={`/${currentUser.username}`}>
              {currentUser.username}
            </Link>
            <Link className="m-2 p2" to="/logout">
              Log out
            </Link>
          </div>
        )}
        {!currentUser.username && (
          <div className="">
            <Link className="m-2 p2" to="/login">
              Log in
            </Link>
            <Link className="m-2 p2" to="/signup">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
