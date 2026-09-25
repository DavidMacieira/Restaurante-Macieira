import { useMemo, useState } from "react";
import {
  Edit3,
  FolderOpen,
  Plus,
  Search,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";

import AdminSidebar from "../components/admin/AdminSidebar";
import AdminHeader from "../components/admin/AdminHeader";
import CategoryModal from "../components/admin/CategoryModal";
import { initialCategories } from "../data/adminCategories";

function AdminCategoriesPage() {
  const [categories, setCategories] =
    useState(initialCategories);

  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState(null);

const filteredCategories = useMemo(() => {
  return categories.filter((category) =>
    category.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );
}, [categories, searchTerm]);

  const activeCategories = categories.filter(
    (category) => category.status === "Ativa"
  ).length;

  const totalDishes = categories.reduce(
    (total, category) => total + category.dishes,
    0
  );

  const openCreateModal = () => {
    setSelectedCategory(null);
    setIsModalOpen(true);
  };

  const openEditModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCategory(null);
    setIsModalOpen(false);
  };

  const saveCategory = (formData) => {
    if (selectedCategory) {
      setCategories((currentCategories) =>
        currentCategories.map((category) =>
          category.id === selectedCategory.id
            ? {
                ...category,
                ...formData,
              }
            : category
        )
      );
    } else {
      const newCategory = {
        id: Date.now(),
        name: formData.name,
        description: formData.description,
        status: formData.status,
        dishes: 0,
      };

      setCategories((currentCategories) => [
        ...currentCategories,
        newCategory,
      ]);
    }

    closeModal();
  };

  const deleteCategory = (categoryId) => {
    const category = categories.find(
      (item) => item.id === categoryId
    );

    if (!category) {
      return;
    }

    const confirmed = window.confirm(
      `Tens a certeza de que pretendes eliminar a categoria "${category.name}"?`
    );

    if (!confirmed) {
      return;
    }

    setCategories((currentCategories) =>
      currentCategories.filter(
        (item) => item.id !== categoryId
      )
    );
  };

  const toggleStatus = (categoryId) => {
    setCategories((currentCategories) =>
      currentCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              status:
                category.status === "Ativa"
                  ? "Inativa"
                  : "Ativa",
            }
          : category
      )
    );
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <AdminSidebar />

      <main className="min-h-screen lg:ml-64">
        <AdminHeader
          title="Categorias"
          subtitle="Organiza e gere as categorias do menu."
        />
        

        <div className="space-y-6 p-5 md:p-8">
          <section className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Total de categorias
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    {categories.length}
                  </p>
                </div>

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <FolderOpen size={22} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Categorias ativas
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    {activeCategories}
                  </p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                  <FolderOpen size={22} />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">
                    Pratos associados
                  </p>

                  <p className="mt-2 text-3xl font-semibold text-slate-900">
                    {totalDishes}
                  </p>
                </div>

                <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                  <UtensilsCrossed size={22} />
                </div>
              </div>
            </div>
          </section>

          <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex flex-col gap-4 border-b border-slate-200 p-5 md:flex-row md:items-center md:justify-between">
              <div className="relative w-full md:max-w-sm">
                <Search
                  size={18}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={searchTerm}
                  onChange={(event) =>
                    setSearchTerm(event.target.value)
                  }
                  placeholder="Procurar categoria..."
                  className="w-full rounded-xl border border-slate-200 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              <button
                type="button"
                onClick={openCreateModal}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                <Plus size={18} />
                Nova categoria
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[850px]">
                <thead className="bg-slate-50">
                  <tr className="text-left text-xs uppercase tracking-wide text-slate-500">
                    <th className="px-6 py-4 font-medium">
                      Categoria
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Descrição
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Pratos
                    </th>

                    <th className="px-6 py-4 font-medium">
                      Estado
                    </th>

                    <th className="px-6 py-4 text-right font-medium">
                      Ações
                    </th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-slate-100">
                  {filteredCategories.map((category) => (
                    <tr
                      key={category.id}
                      className="transition hover:bg-slate-50"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-3">
                          <div className="rounded-xl bg-slate-100 p-2.5 text-slate-600">
                            <FolderOpen size={19} />
                          </div>

                          <p className="font-medium text-slate-900">
                            {category.name}
                          </p>
                        </div>
                      </td>

                      <td className="max-w-sm px-6 py-5">
                        <p className="text-sm leading-6 text-slate-500">
                          {category.description}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700">
                          {category.dishes}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <button
                          type="button"
                          onClick={() =>
                            toggleStatus(category.id)
                          }
                          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                            category.status === "Ativa"
                              ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                          }`}
                        >
                          {category.status}
                        </button>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            type="button"
                            onClick={() =>
                              openEditModal(category)
                            }
                            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                            title="Editar categoria"
                          >
                            <Edit3 size={17} />
                          </button>

                          <button
                            type="button"
                            onClick={() =>
                              deleteCategory(category.id)
                            }
                            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
                            title="Eliminar categoria"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filteredCategories.length === 0 && (
                <div className="px-6 py-16 text-center">
                  <FolderOpen
                    size={38}
                    className="mx-auto text-slate-300"
                  />

                  <p className="mt-4 font-medium text-slate-700">
                    Nenhuma categoria encontrada
                  </p>

                  <p className="mt-1 text-sm text-slate-500">
                    Experimenta procurar por outro nome.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <CategoryModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onSave={saveCategory}
        category={selectedCategory}
      />
    </div>
  );
}

export default AdminCategoriesPage;