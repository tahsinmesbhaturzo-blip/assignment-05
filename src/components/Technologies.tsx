import { use, useState } from "react";
import type { TechnologiesType } from "./Type";
import TechnologiesCard from "./TechnologiesCard";
import Selected from "./Selected";
import "react-toastify/dist/ReactToastify.css";
import { Bounce, toast, ToastContainer } from "react-toastify";


interface TechProps {
  techPromise: Promise<TechnologiesType[]>;
}

const Technologies = ({ techPromise }: TechProps) => {
  const technologies = use(techPromise);
  const [selectedTechs, setSelectedTechs] = useState<TechnologiesType[]>([]);

  const handleAddToStack = (tech: TechnologiesType) => {
    const isAlreadyExist = selectedTechs.some((item) => item.id === tech.id);
    if (!isAlreadyExist) {
        toast.success(`${tech.name} added to your stack!`);
      setSelectedTechs((prev) => [...prev, tech]);
    }
    
  };

  const handleRemoveFromStack = (id: string) => {
    setSelectedTechs((prev) => prev.filter((item) => item.id !== id));
  };

  const handleRemoveAll = () => {
    setSelectedTechs([]);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6">
        <ToastContainer

                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
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