import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/main-page";
import CategoryDetailsPage from "./pages/category-details-page";
import Header from "./components/header";
import Footer from "./components/footer";
import LoginPage from "./pages/login-page";
import RegisterPage from "./pages/register-page";
import { useDispatch, useSelector } from "react-redux";
import useApi from "./hooks/useApi";
import { useEffect } from "react";
import { setCategories } from "./redux/categorySlice";

function App(props) {
  const categoryState = useSelector((state) => state.categoryState);
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    api.get("public/categories/listMainCategories").then((res) => {
      dispatch(setCategories(res.data.data));
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="container py-3">
        <Header />

        <main>
          <Routes>
            <Route index element={<MainPage />} />
            <Route path="category">
              <Route path=":slug" element={<CategoryDetailsPage />} />
            </Route>

            <Route path="auth">
              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
