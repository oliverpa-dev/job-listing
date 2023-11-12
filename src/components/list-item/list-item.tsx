import React from "react";
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
  return (
    <div className="list-item__container">
      {data.map((el) => (
        <div className="list-item__wrapper">
          <div className="list-item__copy">
            <div className="list-item__copy__labels">
              <div className="list-item__copy__label">
                {el.company}
                {el.featured}
                {el.new}
              </div>
            </div>
            <div className="list-item__copy__title">{el.position}</div>
            <div className="list-item__copy__sub-labels">
              <ItemSubLabels
                postedAt={el.postedAt}
                contract={el.contract}
                location={el.location}
              />
            </div>
          </div>
          <div className="list-item__filters">
            <ItemFilters
              tools={el.tools}
              languages={el.languages}
              role={el.role}
              level={el.level}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
