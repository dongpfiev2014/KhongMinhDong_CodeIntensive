import logo from "./logo.svg";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SettingsScreen from "./screens/SettingsScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetail from "./screens/ProductDetail";
import NotFound from "./screens/NotFound";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import LanguageSettingScreen from "./screens/LanguageSettingScreen";

function App() {
  return (
    <>
      <HeaderComponent />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<SettingsScreen />}>
            <Route
              path="/settings/language"
              element={<LanguageSettingScreen />}
            />
          </Route>
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="/products/:id" element={<ProductsScreen />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <FooterComponent />
    </>
  );
}

export default App;
