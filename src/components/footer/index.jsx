import { useContext } from "react";
import { AuthTokenContext } from "../context/auth-token-context-provider";

export default function Footer() {
  const authTokenValue = useContext(AuthTokenContext);
  console.log("bura", authTokenValue);

  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <small className="d-block mb-3 text-muted">&copy; 2017–2021</small>
          <strong className="text-danger">Token: {authTokenValue.token}</strong>
        </div>
        <div className="col-6 col-md">
          <h5>Features</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Cool stuff
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Random feature
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Team feature
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Stuff for developers
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Another one
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Last time
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>Resources</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Resource
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Resource name
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Another resource
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Final resource
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Team
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Locations
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Privacy
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
