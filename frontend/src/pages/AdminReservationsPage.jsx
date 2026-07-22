import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import {
  CalendarCheck,
  CalendarClock,
  Check,
  Eye,
  Search,
  Users,
  XCircle,
} from "lucide-react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import ReservationDetailsModal from "../components/admin/ReservationDetailsModal";
import initialReservations from "../data/adminReservations";

function getTodayISO() {
  const date = new Date();
  const timezoneOffset = date.getTimezoneOffset() * 60_000;
  const localDate = new Date(date.getTime() - timezoneOffset);

  return localDate.toISOString().split("T")[0];
}

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function statusClasses(status) {
  if (status === "Confirmada") {
    return "bg-green-50 text-green-700";
  }

  if (status === "Pendente") {
    return "bg-amber-50 text-amber-700";
  }

  return "bg-red-50 text-red-700";
}

function AdminReservationsPage() {
  const [reservations, setReservations] = useState(initialReservations);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todas");
  const [dateFilter, setDateFilter] = useState("Todas");
  const [selectedReservation, setSelectedReservation] = useState(null);

  const today = getTodayISO();

  const statistics = useMemo(() => {
    return {
      total: reservations.length,
      pending: reservations.filter(
        (reservation) => reservation.status === "Pendente"
      ).length,
      confirmed: reservations.filter(
        (reservation) => reservation.status === "Confirmada"
      ).length,
      peopleToday: reservations
        .filter(
          (reservation) =>
            reservation.date === today &&
            reservation.status !== "Cancelada"
        )
        .reduce(
          (total, reservation) => total + reservation.people,
          0
        ),
    };
  }, [reservations, today]);

  const filteredReservations = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return reservations
      .filter((reservation) => {
        const matchesSearch =
          reservation.name.toLowerCase().includes(normalizedSearch) ||
          reservation.email.toLowerCase().includes(normalizedSearch) ||
          reservation.phone.toLowerCase().includes(normalizedSearch);

        const matchesStatus =
          statusFilter === "Todas" ||
          reservation.status === statusFilter;

        let matchesDate = true;

        if (dateFilter === "Hoje") {
          matchesDate = reservation.date === today;
        }

        if (dateFilter === "Próximas") {
          matchesDate = reservation.date >= today;
        }

        if (dateFilter === "Passadas") {
          matchesDate = reservation.date < today;
        }

        return matchesSearch && matchesStatus && matchesDate;
      })
      .sort((firstReservation, secondReservation) => {
        const firstDate = `${firstReservation.date}T${firstReservation.time}`;
        const secondDate = `${secondReservation.date}T${secondReservation.time}`;

        return firstDate.localeCompare(secondDate);
      });
  }, [
    reservations,
    search,
    statusFilter,
    dateFilter,
    today,
  ]);

  function updateReservationStatus(id, status) {
    setReservations((currentReservations) =>
      currentReservations.map((reservation) =>
        reservation.id === id
          ? {
              ...reservation,
              status,
            }
          : reservation
      )
    );

    setSelectedReservation((currentReservation) => {
      if (!currentReservation || currentReservation.id !== id) {
        return currentReservation;
      }

      return {
        ...currentReservation,
        status,
      };
    });
  }

  const statisticCards = [
    {
      label: "Total de reservas",
      value: statistics.total,
      detail: "Registadas no sistema",
      icon: CalendarCheck,
      iconClasses: "bg-blue-50 text-blue-600",
    },
    {
      label: "Reservas pendentes",
      value: statistics.pending,
      detail: "Aguardam confirmação",
      icon: CalendarClock,
      iconClasses: "bg-amber-50 text-amber-600",
    },
    {
      label: "Confirmadas",
      value: statistics.confirmed,
      detail: "Reservas confirmadas",
      icon: Check,
      iconClasses: "bg-green-50 text-green-600",
    },
    {
      label: "Pessoas hoje",
      value: statistics.peopleToday,
      detail: "Excluindo cancelamentos",
      icon: Users,
      iconClasses: "bg-violet-50 text-violet-600",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-900">
      <div className="flex">
        <AdminSidebar />

        <div className="min-w-0 flex-1">
          <AdminHeader
            title="Gestão de Reservas"
            subtitle="Confirmação e acompanhamento das reservas do restaurante"
          />

          <main className="px-5 py-7 md:px-8 md:py-8">
            <div className="mx-auto max-w-7xl">
              <div>
                <p className="text-sm font-medium text-blue-600">
                  Gestão
                </p>

                <h1 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                  Reservas
                </h1>

                <p className="mt-2 text-sm text-slate-500">
                  Consulta os pedidos e atualiza o estado de cada reserva.
                </p>
              </div>

              <section className="mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {statisticCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <article
                      key={card.label}
                      className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-sm font-medium text-slate-500">
                            {card.label}
                          </p>

                          <p className="mt-3 text-3xl font-semibold text-slate-900">
                            {card.value}
                          </p>
                        </div>

                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-lg ${card.iconClasses}`}
                        >
                          <Icon size={21} />
                        </div>
                      </div>

                      <p className="mt-5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                        {card.detail}
                      </p>
                    </article>
                  );
                })}
              </section>

              <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="border-b border-slate-200 p-5">
                  <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="relative w-full xl:max-w-md">
                      <Search
                        size={18}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      />

                      <input
                        type="search"
                        value={search}
                        onChange={(event) =>
                          setSearch(event.target.value)
                        }
                        placeholder="Pesquisar cliente, email ou telefone..."
                        className="w-full rounded-lg border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex overflow-x-auto rounded-lg border border-slate-200 bg-slate-50 p-1">
                        {["Todas", "Hoje", "Próximas", "Passadas"].map(
                          (filter) => (
                            <button
                              key={filter}
                              type="button"
                              onClick={() => setDateFilter(filter)}
                              className={`whitespace-nowrap rounded-md px-3 py-2 text-sm font-medium transition ${
                                dateFilter === filter
                                  ? "bg-white text-blue-600 shadow-sm"
                                  : "text-slate-500 hover:text-slate-800"
                              }`}
                            >
                              {filter}
                            </button>
                          )
                        )}
                      </div>

                      <select
                        value={statusFilter}
                        onChange={(event) =>
                          setStatusFilter(event.target.value)
                        }
                        className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                      >
                        <option>Todas</option>
                        <option>Pendente</option>
                        <option>Confirmada</option>
                        <option>Cancelada</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[1000px] text-left">
                    <thead className="bg-slate-50">
                      <tr className="text-xs uppercase tracking-wide text-slate-500">
                        <th className="px-5 py-4 font-medium">
                          Cliente
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Data
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Hora
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Pessoas
                        </th>

                        <th className="px-5 py-4 font-medium">
                          Estado
                        </th>

                        <th className="px-5 py-4 text-right font-medium">
                          Ações
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredReservations.map((reservation) => (
                        <tr
                          key={reservation.id}
                          className="border-t border-slate-100 transition hover:bg-slate-50/70"
                        >
                          <td className="px-5 py-4">
                            <p className="font-medium text-slate-900">
                              {reservation.name}
                            </p>

                            <p className="mt-1 text-sm text-slate-500">
                              {reservation.email}
                            </p>
                          </td>

                          <td className="px-5 py-4 text-sm text-slate-600">
                            {formatDate(reservation.date)}
                          </td>

                          <td className="px-5 py-4 text-sm font-medium text-slate-700">
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

                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-2">
                              {reservation.status === "Pendente" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateReservationStatus(
                                      reservation.id,
                                      "Confirmada"
                                    )
                                  }
                                  className="rounded-lg p-2.5 text-slate-500 transition hover:bg-green-50 hover:text-green-600"
                                  aria-label={`Confirmar reserva de ${reservation.name}`}
                                >
                                  <Check size={18} />
                                </button>
                              )}

                              {reservation.status !== "Cancelada" && (
                                <button
                                  type="button"
                                  onClick={() =>
                                    updateReservationStatus(
                                      reservation.id,
                                      "Cancelada"
                                    )
                                  }
                                  className="rounded-lg p-2.5 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                                  aria-label={`Cancelar reserva de ${reservation.name}`}
                                >
                                  <XCircle size={18} />
                                </button>
                              )}

                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedReservation(reservation)
                                }
                                className="rounded-lg p-2.5 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                                aria-label={`Ver reserva de ${reservation.name}`}
                              >
                                <Eye size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredReservations.length === 0 && (
                    <div className="px-5 py-16 text-center">
                      <CalendarClock
                        size={36}
                        className="mx-auto text-slate-300"
                      />

                      <p className="mt-4 font-medium text-slate-700">
                        Nenhuma reserva encontrada
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Altera os filtros ou experimenta outra pesquisa.
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 px-5 py-4 text-sm text-slate-500">
                  {filteredReservations.length} de {reservations.length}{" "}
                  reservas
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {selectedReservation && (
          <ReservationDetailsModal
            key="reservation-details"
            reservation={selectedReservation}
            onClose={() => setSelectedReservation(null)}
            onUpdateStatus={updateReservationStatus}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminReservationsPage;