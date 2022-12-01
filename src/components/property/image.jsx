import React from "react";
import PropTypes from "prop-types";

export const PropertyImage = ({url}) => {
  return (
    <div className="property__image-wrapper">
      <img className="property__image" src={url} alt="Photo studio" />
    </div>
  );
};

PropertyImage.propTypes = {
  url: PropTypes.string.isRequired,
};
