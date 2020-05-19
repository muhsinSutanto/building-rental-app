import React from "react";

const Pagination = ({
  buildingsRaw,
  handlePrev,
  handleNext,
  buildings,
  currentPage,
}) => {
  return (
    <div className="pagination-container">
      {currentPage < buildings.length || buildingsRaw.length < 5 ? (
        <button disabled onClick={handlePrev}>
          previous
        </button>
      ) : (
        <button onClick={handlePrev}>previous</button>
      )}

      {currentPage > buildings.length || buildingsRaw.length < 5 ? (
        <button disabled onClick={handleNext}>
          next
        </button>
      ) : (
        <button onClick={handleNext}>next</button>
      )}
    </div>
  );
};

export default Pagination;
