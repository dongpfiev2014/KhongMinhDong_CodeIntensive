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

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/livedemo" element={<LiveDemoScreen />} />
          <Route path="/accounts" element={<ProfileScreen />} />
          <Route path="/accounts/login" element={<LoginForm />} />
          <Route path="/accounts/signup" element={<RegisterForm />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
        <NewsletterSignupForm />
        <FloatButtonComponent />
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
