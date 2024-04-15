import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import HomeScreen from "../src/screens/HomeScreen";
import NotFoundScreen from "./screens/NotFoundScreen";
import AboutScreen from "./screens/AboutScreen";
import FloatButtonComponent from "./components/FloatButtonComponent";
import NewsletterSignupForm from "./components/SignupForm/NewsletterSignupForm";

function App() {
  return (
    <>
      <HeaderComponent />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </BrowserRouter>

      <NewsletterSignupForm />
      <FloatButtonComponent />
      <FooterComponent />
    </>
  );
}

export default App;
