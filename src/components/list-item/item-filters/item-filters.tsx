import React from "react";
import "./item-filters.scss";

interface ItemFiltersProps {
  tools: string[];
  languages: string[];
  role: string;
  level: string;
}

export const ItemFilters: React.FC<ItemFiltersProps> = ({
  tools,
  languages,
  role,
  level,
}) => {
  // Return array of tools, languages, role, and level
  const appendStrings = () => {
    return [...tools, ...languages, role, level];
  };

  const filters = appendStrings();

  return (
    <div className="list-item-filters">
      {filters.map((filter) => (
        <input
          type="button"
          value={filter}
          onClick={() => console.log(filter)}
        ></input>
      ))}
    </div>
  );
};
