import {
  CalendarCheck,
  CalendarClock,
  Euro,
  UtensilsCrossed,
  MoreHorizontal,
  Plus,
} from "lucide-react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import StatCard from "../components/admin/StatCard";

const reservations = [
  {
    id: 1,
    name: "João Ferreira",
    date: "13 Jul 2026",
    time: "20:00",
    people: 2,
    status: "Confirmada",
  },
  {
    id: 2,
    name: "Marta Silva",
    date: "13 Jul 2026",
    time: "20:30",
    people: 4,
    status: "Pendente",
  },
  {
    id: 3,
    name: "Ricardo Alves",
    date: "14 Jul 2026",
    time: "19:30",
    people: 3,
    status: "Confirmada",
  },
  {
    id: 4,
    name: "Ana Costa",
    date: "14 Jul 2026",
    time: "21:00",
    people: 2,
    status: "Cancelada",
  },
];

const unavailableDishes = [
  "Polvo à Brasa",
  "Pera Rocha",
  "Douro Branco",
];

function statusClasses(status) {
  if (status === "Confirmada") {
    return "bg-green-50 text-green-700";
  }

  if (status === "Pendente") {
    return "bg-amber-50 text-amber-700";
  }

  return "bg-red-50 text-red-700";
}

function AdminPage() {
  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-900">
      <div className="flex">
        <AdminSidebar />

        <div className="min-w-0 flex-1">
          <AdminHeader />

          <main className="px-5 py-7 md:px-8 md:py-8">
            <div className="mx-auto max-w-7xl">
              <section>
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-blue-600">
                      Segunda-feira, 13 de julho
                    </p>

                    <h2 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                      Bem-vindo, David
                    </h2>
                  </div>

                  <button
                    type="button"
                    className="inline-flex w-fit items-center gap-2 rounded-lg bg-[#2563EB] px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    <Plus size={18} />
                    Nova reserva
                  </button>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard
                    label="Pratos ativos"
                    value="18"
                    detail="3 pratos em destaque"
                    icon={UtensilsCrossed}
                    iconClassName="bg-blue-50 text-blue-600"
                  />

                  <StatCard
                    label="Reservas pendentes"
                    value="6"
                    detail="Precisam de confirmação"
                    icon={CalendarClock}
                    iconClassName="bg-amber-50 text-amber-600"
                  />

                  <StatCard
                    label="Reservas confirmadas"
                    value="14"
                    detail="Próximos 7 dias"
                    icon={CalendarCheck}
                    iconClassName="bg-green-50 text-green-600"
                  />

                  <StatCard
                    label="Receita estimada"
                    value="2 480€"
                    detail="Durante este mês"
                    icon={Euro}
                    iconClassName="bg-violet-50 text-violet-600"
                  />
                </div>
              </section>

              <section className="mt-6 grid gap-6 xl:grid-cols-[1.45fr_0.55fr]">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                  <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        Reservas recentes
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        Pedidos recebidos mais recentemente
                      </p>
                    </div>

                    <button
                      type="button"
                      className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
                    >
                      Ver todas
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left">
                      <thead className="bg-slate-50">
                        <tr className="text-xs uppercase tracking-wide text-slate-500">
                          <th className="px-5 py-4 font-medium">Cliente</th>
                          <th className="px-5 py-4 font-medium">Data</th>
                          <th className="px-5 py-4 font-medium">Hora</th>
                          <th className="px-5 py-4 font-medium">Pessoas</th>
                          <th className="px-5 py-4 font-medium">Estado</th>
                          <th className="px-5 py-4 font-medium" />
                        </tr>
                      </thead>

                      <tbody>
                        {reservations.map((reservation) => (
                          <tr
                            key={reservation.id}
                            className="border-t border-slate-100 transition hover:bg-slate-50/70"
                          >
                            <td className="px-5 py-4">
                              <p className="font-medium text-slate-900">
                                {reservation.name}
                              </p>
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-600">
                              {reservation.date}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-600">
                              {reservation.time}
                            </td>

                            <td className="px-5 py-4 text-sm text-slate-600">
                              {reservation.people}
                            </td>

                            <td className="px-5 py-4">
                              <span
                                className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${statusClasses(
                                  reservation.status
                                )}`}
                              >
                                {reservation.status}
                              </span>
                            </td>

                            <td className="px-5 py-4 text-right">
                              <button
                                type="button"
                                className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                                aria-label="Mais opções"
                              >
                                <MoreHorizontal size={19} />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid gap-6">
                  <aside className="rounded-xl bg-[#0F172A] p-6 text-white shadow-sm">
                    <p className="text-sm font-medium text-blue-300">
                      Próxima reserva
                    </p>

                    <div className="mt-5">
                      <p className="text-4xl font-semibold">20:00</p>

                      <p className="mt-3 text-lg font-medium">
                        João Ferreira
                      </p>

                      <p className="mt-1 text-sm text-slate-400">
                        Mesa para 2 pessoas
                      </p>
                    </div>

                    <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm">
                      <div className="flex justify-between gap-5">
                        <span className="text-slate-400">Telefone</span>
                        <span>+351 900 000 000</span>
                      </div>

                      <div className="flex justify-between gap-5">
                        <span className="text-slate-400">Estado</span>
                        <span className="text-green-400">Confirmada</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="mt-6 w-full rounded-lg bg-white px-4 py-3 text-sm font-medium text-slate-900 transition hover:bg-slate-100"
                    >
                      Ver detalhes
                    </button>
                  </aside>

                  <aside className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-slate-900">
                          Indisponíveis
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          Pratos sem disponibilidade
                        </p>
                      </div>

                      <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                        {unavailableDishes.length}
                      </span>
                    </div>

                    <div className="mt-5 space-y-3">
                      {unavailableDishes.map((dish) => (
                        <div
                          key={dish}
                          className="flex items-center justify-between rounded-lg bg-slate-50 px-4 py-3"
                        >
                          <span className="text-sm font-medium text-slate-700">
                            {dish}
                          </span>

                          <span className="h-2 w-2 rounded-full bg-red-500" />
                        </div>
                      ))}
                    </div>

                    <button
                      type="button"
                      className="mt-5 text-sm font-medium text-blue-600 transition hover:text-blue-700"
                    >
                      Gerir menu
                    </button>
                  </aside>
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;