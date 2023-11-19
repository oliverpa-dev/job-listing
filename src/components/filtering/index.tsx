import React from "react";
import "./main.scss";

interface FilterProps {
  filters: string[];
  onRemove: (valueToRemove: string) => void;
  onClear: () => void;
}

export const Filter: React.FC<FilterProps> = ({
  filters,
  onRemove,
  onClear,
}) => {
  console.log(filters);

  return (
    <div className="list-item__filter">
      <div className="list-item__filter__copy">
        {filters.map((filter) => (
          <div className="list-item__filter__content">
            <span>{filter}</span>
            <button
              onClick={() => onRemove(filter)}
              className="material-symbols-outlined"
            >
              close
            </button>
          </div>
        ))}
      </div>
      <span className="list-item__filter__clear" onClick={() => onClear()}>
        Clear
      </span>
    </div>
  );
};


