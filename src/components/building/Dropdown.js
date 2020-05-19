import React from "react";
import PropTypes from "prop-types";

const Dropdown = ({
  selectedOption,
  isDropDownOpen,
  handleDropDown,
  handleSelectOption,
}) => {
  return (
    <div onClick={handleDropDown} className="dropdwn">
      <div className="dropdwn-grup">
        <div>{selectedOption} </div>
        {isDropDownOpen ? (
          <i className="fa fa-caret-up"></i>
        ) : (
          <i className="fa fa-caret-down"></i>
        )}
      </div>
      {isDropDownOpen && (
        <ul>
          <li onClick={() => handleSelectOption("apartement")}>Apartment</li>
          <li onClick={() => handleSelectOption("office")}>Office</li>
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  selectedOption: PropTypes.string.isRequired,
  isDropDownOpen: PropTypes.bool.isRequired,
  handleDropDown: PropTypes.func.isRequired,
  handleSelectOption: PropTypes.func.isRequired,
};

export default Dropdown;
