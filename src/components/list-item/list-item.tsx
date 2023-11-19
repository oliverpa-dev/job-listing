import React, { useState } from "react";
import "./main.scss";
import { ItemFilters } from "./item-filters/item-filters";
import { ItemSubLabels } from "./item-sub-labels/item-sub-labels";
import { Filter } from "../filtering";

interface ListItemProps {
  data: Item[];
}

interface Item {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}

export const ListItem: React.FC<ListItemProps> = ({ data }) => {
  const [filters, setFilters] = useState<string[]>([]);
  
  /**
   * This function checks if the array is not empty
   * @param clickedFilter - string value
   */
  const handleOnClick = (clickedFilter: string) => {
    if (filters.length !== 0) {
      if (!filters.includes(clickedFilter)) {
        setFilters((prevState) => {
          return [...prevState, clickedFilter];
        });
      }
    } else {
      setFilters([clickedFilter]);
    }
  };

  /**
   * This function removes filters from the array
   * @param valueToRemove - string value
   */
  const handleOnRemove = (valueToRemove: string) => {
    setFilters(filters.filter((el) => el !== valueToRemove));
  };

  /**
   * This function sets the array to empty
   */
  const handleOnClear = () => {
    setFilters([]);
  };

  return (
    <div className="list-item__container">
      {filters.length ? <Filter
          filters={filters}
          onRemove={handleOnRemove}
          onClear={handleOnClear}
        />
        : ''}
      {data.map((item) => (
        <div className="list-item__wrapper">
          <div className="list-item__copy">
            <div className="list-item__copy__labels">
              <div className="list-item__copy__label">
                {item.company}
                {item.featured}
                {item.new}
              </div>
            </div>
            <div className="list-item__copy__title">{item.position}</div>
            <div className="list-item__copy__sub-labels">
              <ItemSubLabels
                postedAt={item.postedAt}
                contract={item.contract}
                location={item.location}
              />
            </div>
          </div>
          <div className="list-item__filters">
            <ItemFilters
              tools={item.tools}
              languages={item.languages}
              role={item.role}
              level={item.level}
              onSelect={handleOnClick}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
