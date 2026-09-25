import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";
import AdminMenuPage from "./pages/AdminMenuPage";
import AdminReservationsPage from "./pages/AdminReservationsPage";
import AdminCategoriesPage from "./pages/AdminCategoriesPage";
import { LanguageProvider } from "./context/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/menu" element={<AdminMenuPage />} />
        <Route path="/admin/reservas" element={<AdminReservationsPage />} />
        <Route path="/admin/categorias" element={<AdminCategoriesPage />} />
      </Routes>
    </LanguageProvider>
  );
}

export default App;