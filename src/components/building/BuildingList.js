import React from "react";
import Spinner from "../elements/Spinner";
import PropTypes from "prop-types";
import BuildingItem from "./BuildingItem";
import IndoMap from "./IndoMap";
import Pagination from "../elements/Pagination";

const BuldingList = ({
  buildingsRaw,
  buildings,
  loading,
  loadingPagination,
  handleNext,
  currentPage,
  handlePrev,
  fetched,
}) => {
  if (loading) {
    return <Spinner />;
  } else if (buildings.length === 0 && fetched) {
    return <h2>Place being searched is not available</h2>;
  } else {
    return (
      buildings.length > 0 && (
        <div className="result-container">
          <div>
            {!loadingPagination ? (
              <div className="building-list-container">
                {buildings.map((item, idx) => {
                  return <BuildingItem item={item} />;
                })}
              </div>
            ) : (
              <Spinner />
            )}
            <Pagination
              buildingsRaw={buildingsRaw}
              buildings={buildings}
              handleNext={handleNext}
              handlePrev={handlePrev}
              currentPage={currentPage}
            />
          </div>
          <div>
            <IndoMap buildings={buildings} />
          </div>
        </div>
      )
    );
  }
};

BuldingList.propTypes = {
  buildingsRaw:  PropTypes.array.isRequired,
  buildings: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  loadingPagination: PropTypes.bool.isRequired,
  handleNext: PropTypes.func.isRequired,
  handlePrev: PropTypes.func.isRequired,
  fetched: PropTypes.bool.isRequired
};

export default BuldingList;
