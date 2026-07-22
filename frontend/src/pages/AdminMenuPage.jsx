import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Pencil,
  Plus,
  Search,
  Trash2,
  UtensilsCrossed,
  X,
} from "lucide-react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import DishModal from "../components/admin/DishModal";
import initialDishes from "../data/adminDishes";

const currencyFormatter = new Intl.NumberFormat("pt-PT", {
  style: "currency",
  currency: "EUR",
});

function AdminMenuPage() {
  const [dishes, setDishes] = useState(initialDishes);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Todas");
  const [editingDish, setEditingDish] = useState(null);
  const [deletingDish, setDeletingDish] = useState(null);
  const [isDishModalOpen, setIsDishModalOpen] = useState(false);

  const categories = useMemo(() => {
    return ["Todas", ...new Set(dishes.map((dish) => dish.category))];
  }, [dishes]);

  const filteredDishes = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return dishes.filter((dish) => {
      const matchesSearch =
        dish.name.toLowerCase().includes(normalizedSearch) ||
        dish.description.toLowerCase().includes(normalizedSearch);

      const matchesCategory =
        category === "Todas" || dish.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [dishes, search, category]);

  function openCreateModal() {
    setEditingDish(null);
    setIsDishModalOpen(true);
  }

  function openEditModal(dish) {
    setEditingDish(dish);
    setIsDishModalOpen(true);
  }

  function closeDishModal() {
    setIsDishModalOpen(false);
    setEditingDish(null);
  }

  function saveDish(formData) {
    if (editingDish) {
      setDishes((current) =>
        current.map((dish) =>
          dish.id === editingDish.id
            ? { ...dish, ...formData }
            : dish
        )
      );
    } else {
      const id =
        typeof crypto !== "undefined" && crypto.randomUUID
          ? crypto.randomUUID()
          : Date.now();

      setDishes((current) => [
        {
          id,
          ...formData,
        },
        ...current,
      ]);
    }

    closeDishModal();
  }

  function deleteDish() {
    if (!deletingDish) return;

    setDishes((current) =>
      current.filter((dish) => dish.id !== deletingDish.id)
    );

    setDeletingDish(null);
  }

  function statusClasses(status) {
    return status === "Ativo"
      ? "bg-green-50 text-green-700"
      : "bg-amber-50 text-amber-700";
  }

  return (
    <div className="min-h-screen bg-[#F4F7FA] text-slate-900">
      <div className="flex">
        <AdminSidebar />

        <div className="min-w-0 flex-1">
          <AdminHeader
  title="Gestão do Menu"
  subtitle="Administração dos pratos e respetiva disponibilidade"
/>

          <main className="px-5 py-7 md:px-8 md:py-8">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-blue-600">
                    Gestão
                  </p>

                  <h1 className="mt-2 text-2xl font-semibold text-slate-900 md:text-3xl">
                    Gestão do Menu
                  </h1>

                  <p className="mt-2 text-sm text-slate-500">
                    Adiciona, edita e controla a disponibilidade dos pratos.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={openCreateModal}
                  className="inline-flex w-fit items-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  <Plus size={18} />
                  Adicionar prato
                </button>
              </div>

              <section className="mt-7 rounded-xl border border-slate-200 bg-white shadow-sm">
                <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
                  <div className="relative w-full md:max-w-md">
                    <Search
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="search"
                      value={search}
                      onChange={(event) => setSearch(event.target.value)}
                      placeholder="Pesquisar pratos..."
                      className="w-full rounded-lg border border-slate-200 py-3 pl-11 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                  >
                    {categories.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full min-w-[850px] text-left">
                    <thead className="bg-slate-50">
                      <tr className="text-xs uppercase tracking-wide text-slate-500">
                        <th className="px-5 py-4 font-medium">Prato</th>
                        <th className="px-5 py-4 font-medium">Categoria</th>
                        <th className="px-5 py-4 font-medium">Preço</th>
                        <th className="px-5 py-4 font-medium">Estado</th>
                        <th className="px-5 py-4 text-right font-medium">
                          Ações
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredDishes.map((dish) => (
                        <tr
                          key={dish.id}
                          className="border-t border-slate-100 transition hover:bg-slate-50/70"
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-4">
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                                <UtensilsCrossed size={19} />
                              </div>

                              <div>
                                <p className="font-medium text-slate-900">
                                  {dish.name}
                                </p>

                                <p className="mt-1 max-w-md truncate text-sm text-slate-500">
                                  {dish.description}
                                </p>
                              </div>
                            </div>
                          </td>

                          <td className="px-5 py-4 text-sm text-slate-600">
                            {dish.category}
                          </td>

                          <td className="px-5 py-4 text-sm font-medium text-slate-900">
                            {currencyFormatter.format(dish.price)}
                          </td>

                          <td className="px-5 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium ${statusClasses(
                                dish.status
                              )}`}
                            >
                              {dish.status}
                            </span>
                          </td>

                          <td className="px-5 py-4">
                            <div className="flex justify-end gap-2">
                              <button
                                type="button"
                                onClick={() => openEditModal(dish)}
                                className="rounded-lg p-2.5 text-slate-500 transition hover:bg-blue-50 hover:text-blue-600"
                                aria-label={`Editar ${dish.name}`}
                              >
                                <Pencil size={18} />
                              </button>

                              <button
                                type="button"
                                onClick={() => setDeletingDish(dish)}
                                className="rounded-lg p-2.5 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                                aria-label={`Eliminar ${dish.name}`}
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {filteredDishes.length === 0 && (
                    <div className="px-5 py-16 text-center">
                      <UtensilsCrossed
                        size={34}
                        className="mx-auto text-slate-300"
                      />

                      <p className="mt-4 font-medium text-slate-700">
                        Nenhum prato encontrado
                      </p>

                      <p className="mt-1 text-sm text-slate-500">
                        Experimenta alterar a pesquisa ou a categoria.
                      </p>
                    </div>
                  )}
                </div>

                <div className="border-t border-slate-200 px-5 py-4 text-sm text-slate-500">
                  {filteredDishes.length} de {dishes.length} pratos
                </div>
              </section>
            </div>
          </main>
        </div>
      </div>

      <AnimatePresence>
        {isDishModalOpen && (
          <DishModal
            key="dish-modal"
            dish={editingDish}
            onClose={closeDishModal}
            onSave={saveDish}
          />
        )}

        {deletingDish && (
          <motion.div
            key="delete-modal"
            className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/60 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setDeletingDish(null)}
          >
            <motion.div
              className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.98 }}
              onMouseDown={(event) => event.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Eliminar prato?
                  </h2>

                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    O prato{" "}
                    <span className="font-medium text-slate-700">
                      {deletingDish.name}
                    </span>{" "}
                    será removido do menu.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setDeletingDish(null)}
                  className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="mt-7 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setDeletingDish(null)}
                  className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50"
                >
                  Cancelar
                </button>

                <button
                  type="button"
                  onClick={deleteDish}
                  className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-700"
                >
                  Eliminar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AdminMenuPage;