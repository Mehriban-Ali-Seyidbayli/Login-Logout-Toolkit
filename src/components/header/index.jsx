import { useContext } from "react";
import { Badge, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AuthTokenContext } from "../context/auth-token-context-provider";
import { removeUserData } from "../../redux/userSlice";
import useSwal from "../../hooks/useSwal";

export default function Header() {
  const userState = useSelector((state) => state.userState);
  const authTokenContextValue = useContext(AuthTokenContext);
  const dispatch = useDispatch();
  const swal = useSwal();
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("token");
    authTokenContextValue.setToken(null);
    dispatch(removeUserData());
  };

  const onLogoutBtnClick = () => {
    swal
      .fire({
        title: <strong>Do you want to log out</strong>,
        showCancelButton: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          logoutUser();
        }
        navigate("/");
      });
  };

  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center text-dark text-decoration-none"
        >
          <span className="fs-4">Find Service</span>
        </a>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <Link
            to={"category/test"}
            className="me-3 py-2 text-dark text-decoration-none"
          >
            Category Detail
          </Link>
          <Link
            to={"blogs"}
            className="me-3 py-2 text-dark text-decoration-none"
          >
            Blogs
          </Link>

          {userState.userData === null ? (
            <>
              <Link
                to={"auth/login"}
                className="me-3 py-2 text-dark text-decoration-none"
              >
                Login
              </Link>
              <Link
                to={"auth/register"}
                className="ms-3 py-2 text-dark text-decoration-none"
              >
                Register
              </Link>
            </>
          ) : (
            <>
              <Badge className="p-3 me-3 bg-danger">
                <i className="fa-solid fa-user"></i> &nbsp;
                {userState.userData.fullname}
              </Badge>
              <Button variant="success" onClick={onLogoutBtnClick}>
                <i className="fa-solid fa-right-from-bracket"></i> &nbsp; Log
                out
              </Button>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
