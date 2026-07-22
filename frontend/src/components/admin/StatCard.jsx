import { ArrowUpRight } from "lucide-react";

function StatCard({
  label,
  value,
  detail,
  icon: Icon,
  iconClassName = "bg-blue-50 text-blue-600",
}) {
  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <p className="mt-3 text-3xl font-semibold text-slate-900">
            {value}
          </p>
        </div>

        <div
          className={`flex h-11 w-11 items-center justify-center rounded-lg ${iconClassName}`}
        >
          <Icon size={21} />
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500">{detail}</p>

        <ArrowUpRight size={16} className="text-slate-400" />
      </div>
    </article>
  );
}

export default StatCard;