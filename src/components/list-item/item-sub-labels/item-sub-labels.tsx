import React from "react";
import "./main.scss";

interface ItemSubLabelsProps {
  postedAt: string;
  contract: string;
  location: string;
}

export const ItemSubLabels: React.FC<ItemSubLabelsProps> = ({
  postedAt,
  contract,
  location,
}) => {
  const concatenatedStrings = function concatenateStrings() {
    let stringsArray = [postedAt, contract, location];
    return stringsArray.join(" - ");
  };

  const concatenatedSubLabels = concatenatedStrings();

  return <div className="list-item-sub-labels">{concatenatedSubLabels}</div>;
};
