import { use, useState } from "react";
import type { TechnologiesType } from "./Type";
import TechnologiesCard from "./TechnologiesCard";
import Selected from "./Selected";

interface TechProps {
  techPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<TechnologiesType[]>([]);

  // Add technology to stack
  const handleAddToStack = (tech: TechnologiesType) => {
    const isAlreadyExist = selectedTechs.some((item) => item.id === tech.id);
    if (!isAlreadyExist) {
      setSelectedTechs((prev) => [...prev, tech]);
    }
  };

  // Remove single technology from stack
  const handleRemoveFromStack = (id: string) => {
    setSelectedTechs((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear all items from stack
  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        {/* Left Side: Technologies List */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {technologies.map((tech: TechnologiesType) => {
            const isSelected = selectedTechs.some((item) => item.id === tech.id);
            return (
              <TechnologiesCard
                key={tech.id}
                technology={tech}
                onAdd={handleAddToStack}
                isSelected={isSelected}
              />
            );
          })}
        </div>

        {/* Right Side: Selected Stack Component */}
        <div className="lg:col-span-1">
          <Selected
            selectedTechs={selectedTechs}
            onRemove={handleRemoveFromStack}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;