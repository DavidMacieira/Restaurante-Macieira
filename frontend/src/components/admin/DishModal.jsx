import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Upload, X } from "lucide-react";

const initialForm = {
  name: "",
  description: "",
  category: "Entradas",
  price: "",
  status: "Ativo",
  imageName: "",
};

function DishModal({ dish, onClose, onSave }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");

  const isEditing = Boolean(dish);

  useEffect(() => {
    if (dish) {
      setForm({
        name: dish.name,
        description: dish.description,
        category: dish.category,
        price: String(dish.price),
        status: dish.status,
        imageName: dish.imageName || "",
      });
    } else {
      setForm(initialForm);
    }
  }, [dish]);

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

  function updateField(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleImage(event) {
    const file = event.target.files?.[0];

    if (!file) return;

    setForm((current) => ({
      ...current,
      imageName: file.name,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim()) {
      setError("Introduz o nome do prato.");
      return;
    }

    if (!form.price || Number(form.price) <= 0) {
      setError("Introduz um preço válido.");
      return;
    }

    setError("");

    onSave({
      ...form,
      name: form.name.trim(),
      description: form.description.trim(),
      price: Number(form.price),
    });
  }

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
        initial={{ opacity: 0, y: 28, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 18, scale: 0.98 }}
        transition={{ duration: 0.25 }}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              {isEditing ? "Editar prato" : "Adicionar prato"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Preenche as informações que serão apresentadas no menu.
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

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Nome do prato
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={updateField}
              placeholder="Ex.: Bacalhau à Macieira"
              className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Descrição
            </label>

            <textarea
              name="description"
              value={form.description}
              onChange={updateField}
              rows={4}
              placeholder="Descrição curta do prato..."
              className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Categoria
              </label>

              <select
                name="category"
                value={form.category}
                onChange={updateField}
                className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
              >
                <option>Entradas</option>
                <option>Peixe</option>
                <option>Carne</option>
                <option>Sobremesas</option>
                <option>Vinhos</option>
                <option>Bebidas</option>
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Preço
              </label>

              <div className="relative">
                <input
                  type="number"
                  name="price"
                  value={form.price}
                  onChange={updateField}
                  min="0"
                  step="0.01"
                  placeholder="0,00"
                  className="w-full rounded-lg border border-slate-200 px-4 py-3 pr-12 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                />

                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-slate-500">
                  €
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Estado
            </label>

            <select
              name="status"
              value={form.status}
              onChange={updateField}
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
            >
              <option>Ativo</option>
              <option>Indisponível</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Imagem
            </label>

            <label className="flex cursor-pointer items-center justify-center gap-3 rounded-lg border border-dashed border-slate-300 bg-slate-50 px-5 py-6 text-sm text-slate-600 transition hover:border-blue-400 hover:bg-blue-50/50">
              <Upload size={20} />

              <span>
                {form.imageName || "Selecionar uma imagem"}
              </span>

              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>
          </div>

          {error && (
            <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
              {error}
            </p>
          )}

          <div className="flex justify-end gap-3 border-t border-slate-100 pt-5">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              {isEditing ? "Guardar alterações" : "Adicionar prato"}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default DishModal;