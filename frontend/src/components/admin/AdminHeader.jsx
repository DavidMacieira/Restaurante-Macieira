import { Bell, Menu, Search } from "lucide-react";

function AdminHeader() {
  return (
    <header className="flex min-h-20 items-center justify-between border-b border-slate-200 bg-white px-5 md:px-8">
      <div className="flex items-center gap-4">
        <button
          type="button"
          className="text-slate-600 lg:hidden"
          aria-label="Abrir menu"
        >
          <Menu size={24} />
        </button>

        <div>
          <h1 className="text-xl font-semibold text-slate-900 md:text-2xl">
            Dashboard
          </h1>

          <p className="mt-1 hidden text-sm text-slate-500 sm:block">
            Resumo da atividade do restaurante
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2.5 md:flex">
          <Search size={17} className="text-slate-400" />

          <input
            type="search"
            placeholder="Pesquisar"
            className="w-44 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>

        <button
          type="button"
          className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:bg-slate-50"
          aria-label="Notificações"
        >
          <Bell size={19} />

          <span className="absolute right-2.5 top-2.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2563EB] text-sm font-semibold text-white">
          DM
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;