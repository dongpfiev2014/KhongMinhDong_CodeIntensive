import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeScreen from "../src/screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import AboutScreen from "./screens/AboutScreen";
import FloatButtonComponent from "./components/FloatButtonComponent";
import NewsletterSignupForm from "./components/SignupForm/NewsletterSignupForm";
import LiveDemoScreen from "./screens/LiveDemoScreen";
import "../src/styles/GlobalStyles.css";
import ProfileScreen from "./screens/ProfileScreen";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import { Suspense, useEffect } from "react";
import { Spin } from "antd";
import ProductsScreen from "./screens/ProductsScreen";
import ProjectsScreen from "./screens/ProjectsScreen";
import NewsScreen from "./screens/NewsScreen";
import ContactScreen from "./screens/ContactScreen";
import ServiceScreen from "./screens/ServiceScreen";
import SmartHomeScreen from "./screens/SmartHomeScreen";
import { useDispatch } from "react-redux";
import { getCurrentUser } from "./Redux-reducer/auth";
import VillaComponent from "./components/SmartHomeComponents/VillaComponent";
import HotelComponent from "./components/SmartHomeComponents/HotelComponent";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Suspense
        fallback={
          <>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <Spin tip="Loading" size="large">
                <div className="content" />
              </Spin>
            </div>
          </>
        }
      >
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/about/:id" element={<AboutScreen />} />
            <Route path="/smarthome" element={<SmartHomeScreen />} />
            <Route path="/villa/:id" element={<VillaComponent />} />
            <Route path="/hotel/:id" element={<HotelComponent />} />
            <Route path="/livedemo" element={<LiveDemoScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/projects" element={<ProjectsScreen />} />
            <Route path="/products" element={<ProductsScreen />} />
            <Route path="/news" element={<NewsScreen />} />
            <Route path="/contact" element={<ContactScreen />} />
            <Route path="/service" element={<ServiceScreen />} />
            <Route path="/accounts/*" element={<ProfileScreen />} />
            <Route path="/accounts/login" element={<LoginForm />} />
            <Route path="/accounts/signup" element={<RegisterForm />} />
            <Route path="*" element={<NotFoundScreen />} />
          </Routes>
          <NewsletterSignupForm />
          <FloatButtonComponent />
          <FooterComponent />
        </BrowserRouter>
      </Suspense>
    </>
  );
}

export default App;
