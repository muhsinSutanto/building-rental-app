import React from 'react';
import PropTypes from "prop-types";

const Alert = ({alert}) => {
  return ( alert !== null && (
    <div className='alert'>
      {alert.msg}
    </div>
  ) );
}

Alert.propTypes = {
  alert: PropTypes.string.isRequired
};
 
export default Alert;