import React from "react";

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
    <div>
      {filters.map((filter) => (
        <div>
          <span>{filter}</span>
          <span
            onClick={() => onRemove(filter)}
            className="material-symbols-outlined"
          >
            close
          </span>
        </div>
      ))}
      <span onClick={() => onClear()}>Clear</span>
    </div>
  );
};
