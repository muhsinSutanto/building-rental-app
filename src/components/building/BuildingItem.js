import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const BuildingItem = ({ item: { id, name, images, description, address } }) => {
  return (
    <div key={id} className="building-item-wrapper">
      <div key={id} className="building-item">
        <img src={images.primary} className="round-img" alt="image " />
        <div className="item-card">
          <div className="item-card-top">
            <h3>{name}</h3>
            {description.length > 200 ? (
              <p>{description.substring(0, 50)}...</p>
            ) : (
              <p>{description}</p>
            )}
          </div>
          <div className="card-icon-group">
            <i className="fa fa-location-arrow"></i>
            <h5>{address.street}</h5>
          </div>
          <Link to={`building/${id}`}>
            <button> Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

BuildingItem.propType = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  images: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  address: PropTypes.object.isRequired
}

export default BuildingItem;
