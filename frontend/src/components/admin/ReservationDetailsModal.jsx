import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Ban,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MessageSquareText,
  Phone,
  Users,
  X,
} from "lucide-react";

function formatDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("pt-PT", {
    day: "2-digit",
    month: "long",
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

function DetailItem({ icon: Icon, label, children }) {
  return (
    <div className="flex gap-3 rounded-xl bg-slate-50 p-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
        <Icon size={19} />
      </div>

      <div className="min-w-0">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
          {label}
        </p>

        <div className="mt-1 break-words text-sm font-medium text-slate-800">
          {children}
        </div>
      </div>
    </div>
  );
}

function ReservationDetailsModal({
  reservation,
  onClose,
  onUpdateStatus,
}) {
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 px-4 py-8 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={onClose}
    >
      <motion.div
        className="max-h-full w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        initial={{ opacity: 0, y: 25, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h2 className="text-xl font-semibold text-slate-900">
                {reservation.name}
              </h2>

              <span
                className={`rounded-full px-3 py-1 text-xs font-medium ${statusClasses(
                  reservation.status
                )}`}
              >
                {reservation.status}
              </span>
            </div>

            <p className="mt-2 text-sm text-slate-500">
              Informações completas da reserva
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            aria-label="Fechar"
          >
            <X size={21} />
          </button>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2">
          <DetailItem icon={CalendarDays} label="Data">
            {formatDate(reservation.date)}
          </DetailItem>

          <DetailItem icon={Clock3} label="Hora">
            {reservation.time}
          </DetailItem>

          <DetailItem icon={Users} label="Número de pessoas">
            {reservation.people}{" "}
            {reservation.people === 1 ? "pessoa" : "pessoas"}
          </DetailItem>

          <DetailItem icon={Phone} label="Telefone">
            <a
              href={`tel:${reservation.phone}`}
              className="transition hover:text-blue-600"
            >
              {reservation.phone}
            </a>
          </DetailItem>

          <div className="sm:col-span-2">
            <DetailItem icon={Mail} label="Email">
              <a
                href={`mailto:${reservation.email}`}
                className="transition hover:text-blue-600"
              >
                {reservation.email}
              </a>
            </DetailItem>
          </div>

          <div className="sm:col-span-2">
            <DetailItem icon={MessageSquareText} label="Observações">
              {reservation.observations || "Sem observações adicionais."}
            </DetailItem>
          </div>
        </div>

        <div className="flex flex-col-reverse gap-3 border-t border-slate-200 px-6 py-5 sm:flex-row sm:justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            Fechar
          </button>

          {reservation.status !== "Cancelada" && (
            <button
              type="button"
              onClick={() =>
                onUpdateStatus(reservation.id, "Cancelada")
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-red-50 px-5 py-2.5 text-sm font-medium text-red-700 transition hover:bg-red-100"
            >
              <Ban size={17} />
              Cancelar reserva
            </button>
          )}

          {reservation.status !== "Confirmada" && (
            <button
              type="button"
              onClick={() =>
                onUpdateStatus(reservation.id, "Confirmada")
              }
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-green-700"
            >
              <CheckCircle2 size={17} />
              Confirmar reserva
            </button>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ReservationDetailsModal;