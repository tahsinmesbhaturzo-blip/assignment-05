import type { TechnologiesType } from "./Type";

interface TechnologiesCardProps {
  technology: TechnologiesType;
  onAdd: (tech: TechnologiesType) => void;
  isSelected: boolean;
}

const TechnologiesCard = ({ technology, onAdd, isSelected }: TechnologiesCardProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-3">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-50">
            <img 
              src={technology.icon} 
              alt={technology.name} 
              className="w-8 h-8 object-contain"
              onError={(e) => (e.currentTarget.style.display = 'none')}
            />
          </div>
          {technology.badge && (
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-50 text-blue-500">
              {technology.badge}
            </span>
          )}
        </div>

        <h3 className="text-lg font-bold text-gray-800">{technology.name}</h3>
        <p className="text-xs text-gray-500 mt-1 line-clamp-2 leading-relaxed">
          {technology.description}
        </p>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-medium">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{technology.category}</span>
            <span className="bg-gray-100 px-2 py-0.5 rounded text-gray-600">{technology.difficulty}</span>
          </div>
          <span className="text-amber-500 font-semibold">★ {technology.rating}</span>
        </div>

        <button
          onClick={() => onAdd(technology)}
          disabled={isSelected}
          className={`w-full py-2.5 rounded-xl text-sm font-semibold transition duration-200 ${
            isSelected
              ? "bg-gray-200 text-gray-400 cursor-not-allowed"
              : "bg-slate-900 text-white hover:bg-slate-800 active:scale-95"
          }`}
        >
          {isSelected ? "Added" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
};

export default TechnologiesCard;