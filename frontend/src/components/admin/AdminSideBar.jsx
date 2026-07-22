import {
  LayoutDashboard,
  CalendarDays,
  UtensilsCrossed,
  Tags,
  Images,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Reservas", icon: CalendarDays },
  { label: "Menu", icon: UtensilsCrossed, path: "/admin/menu" },
  { label: "Categorias", icon: Tags },
  { label: "Galeria", icon: Images },
  { label: "Utilizadores", icon: Users },
  { label: "Definições", icon: Settings },
];

function AdminSidebar() {
  return (
    <aside className="hidden min-h-screen w-72 flex-col bg-[#0F172A] px-5 py-6 text-white lg:flex">
      <div className="border-b border-white/10 px-3 pb-6">
        <p className="text-lg font-semibold tracking-[0.22em]">
          MACIEIRA
        </p>

        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.24em] text-slate-400">
          Gestão do restaurante
        </p>
      </div>

      <nav className="mt-6 flex flex-1 flex-col gap-1.5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
  key={item.label}
  to={item.path}
  end={item.path === "/admin"}
  className={({ isActive }) =>
    `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition ${
      isActive
        ? "bg-blue-600 text-white"
        : "text-slate-400 hover:bg-white/5 hover:text-white"
    }`
  }
>
  <Icon size={19} />
  <span>{item.label}</span>
</NavLink>
          );
        })}
      </nav>

      <button
        type="button"
        className="flex items-center gap-3 rounded-lg border-t border-white/10 px-4 pt-6 text-sm text-slate-400 transition hover:text-white"
      >
        <LogOut size={19} />
        Terminar sessão
      </button>
    </aside>
  );
}

export default AdminSidebar;