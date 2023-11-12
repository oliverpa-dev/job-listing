import React, { useState } from "react";
import "./main.scss";
import { ItemFilters } from "./item-filters/item-filters";
import { ItemSubLabels } from "./item-sub-labels/item-sub-labels";

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
  const [state, setState] = useState<string[]>([]);

  const handleOnClick = (clickedFilter: string) => {
    if (state.length === 0) {
      setState([clickedFilter]);
    } else {
      setState((prevState) => {
        return [...prevState, clickedFilter];
      });
    }
  };

  console.log(state);

  return (
    <div className="list-item__container">
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
