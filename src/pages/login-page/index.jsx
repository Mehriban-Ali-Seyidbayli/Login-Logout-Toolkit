import { Button, Col, Form, Row } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthTokenContext } from "../../components/context/auth-token-context-provider";
import { useDispatch } from "react-redux";
import { setUserData } from "../../redux/userSlice";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const api = useApi();
  const authTokenContextValue = useContext(AuthTokenContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formSubmit = (event) => {
    event.preventDefault();

    const formdata = new FormData(event.target);

    const formJson = Object.fromEntries(formdata.entries());

    api
      .post("auth/login", formJson)
      .then((res) => {
        console.log("apidenn", res);
        authTokenContextValue.setToken(res.data.data.token);
        dispatch(setUserData(res.data.data.userData));
        toast("Form submitted");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("User not authenticated or your account suspended.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <Row className="justify-content-center">
          <Col sm="12" lg="4">
            <div className="form-group mb-3">
              <Form.Label>E-mail:</Form.Label>
              <Form.Control type="email" name="email" />
            </div>

            <div className="form-group mb-3">
              <Form.Label>Password:</Form.Label>
              <Form.Control type="password" name="password" />
            </div>

            <div className="form-group mb-3">
              <Button type="submit" variant="success" className="w-100">
                <i className="fa-solid fa-paper-plane"></i>
                &nbsp; Send
              </Button>
            </div>
          </Col>
        </Row>
      </form>
    </>
  );
}
