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
  const [setup, setSetup] = useState(data);
  
  /**
   * This function checks if the array is not empty
   * @param clickedFilter - string value
   */
  const handleOnClick = (clickedFilter: string) => {
    if (filters.length !== 0) {
      console.log(filters);
      if (!filters.includes(clickedFilter)) {
        setFilters((prevState) => {
          return [...prevState, clickedFilter];
        });
      }
      renderFilteredJobs();
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

  // console.log(data);

  // Create a new object based on the selected filters
  // Maybe use includes?
  //Steps?
  // 1. When you click on the fifilter it takes it and compares to all of the objects (incluedes)?

  let filteredOut: any = [];

  // let filteredItems = data.map((el) => {
  //   if(el.role.includes('Frontend')) {
  //     filteredOut.push(el);
  //   }
  // })

// languages= array tools = array, level = string, position = string

// We get the array of elements which in my case is the filters
const renderFilteredJobs = () => {
  if(filters.length) {
    //iterate trough eaech object
    //Check if that objects includes the filter
    //If yes, push the object to the new array
    data.forEach((el) => {
      filters.forEach((filter: any) => {
        if(el.level.includes(filter) || el.position.includes(filter) || el.languages.includes(filter) || el.tools.includes(filter)) {
          filteredOut.push(el);
          console.log(filter);
        }
      })
    })
  } else {
    return;
  }
}
  // renderFilteredJobs();
  // console.log(filteredOut);

  //If the filtersArray is empty
  //Display the data objects
  //If not display filtered objects

  return (
    <div className="list-item__container">
      {filters.length ? <Filter
          filters={filters}
          onRemove={handleOnRemove}
          onClear={handleOnClear}
        />
        : ''}
        {filters.length ? filteredOut.map((item: any) => (
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
      )) : data.map((item: any) => (
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
