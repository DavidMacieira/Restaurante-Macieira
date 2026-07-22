import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MenuPage from "./pages/MenuPage";
import AdminPage from "./pages/AdminPage";
import AdminMenuPage from "./pages/AdminMenuPage";
import AdminReservationsPage from "./pages/AdminReservationsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/admin/menu" element={<AdminMenuPage />} />
      <Route
  path="/admin/reservas"
  element={<AdminReservationsPage />}/>
    </Routes>
  );
}

export default App;