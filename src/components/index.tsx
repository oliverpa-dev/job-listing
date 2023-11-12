import React from "react";
import { ListItem } from "./list-item/list-item";
import "./main.scss";
import data from "../data.json";

export const ListContainer = () => {
  return (
    <div className="list-container">
      <ListItem data={data} />
    </div>
  );
};
