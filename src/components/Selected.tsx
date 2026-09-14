import type { TechnologiesType } from "./Type";

interface SelectedProps {
  selectedTechs: TechnologiesType[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

const Selected = ({ selectedTechs, onRemove, onRemoveAll }: SelectedProps) => {
  const count = selectedTechs.length;

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm h-fit">
      <h2 className="text-xl font-bold text-slate-800">Your Stack</h2>
      <p className="text-sm text-gray-400 mt-1 mb-5">
        {count === 0 ? "No technologies selected yet." : `${count} Technology Selected`}
      </p>

      {count === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center">
          <p className="text-sm text-gray-400 font-medium">Your stack is empty.</p>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {selectedTechs.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 border border-gray-100 rounded-xl shadow-xs"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-7 h-7 object-contain" />
                <div>
                  <h4 className="text-sm font-bold text-slate-800 leading-none">{item.name}</h4>
                  <span className="text-[11px] text-gray-400">{item.category}</span>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 transition p-1"
                aria-label="Remove item"
              >
                ❌
              </button>
            </div>
          ))}

          <button
            onClick={onRemoveAll}
            className="w-full mt-3 py-2.5 border border-red-200 text-red-500 rounded-xl font-semibold text-sm hover:bg-red-50 transition"
          >
            Remove All
          </button>
        </div>
      )}
    </div>
  );
};

export default Selected;