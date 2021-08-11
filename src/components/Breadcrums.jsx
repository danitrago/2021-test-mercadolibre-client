import React from "react";

const Breadcrums = (props) => {
  return (
    <div className="breadcrums">
      {props.items.length > 0 ? (
        <ul className="breadcrums__group">
          {props.items.map((bread) => {
            return (
              <li className="breadcrums__item" key={bread.id}>
                {bread.name}
                <span className="breadcrums__separator">/</span>
              </li>
            );
          })}
        </ul>
      ) : (
        <span>Resultados para: {props.resultsFor}</span>
      )}
    </div>
  );
};

export default Breadcrums;
