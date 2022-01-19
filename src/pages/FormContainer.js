import React from 'react';
import PropTypes from 'prop-types';

function FormContainer({ title, children }) {
  return (
    <div className="form-container">
      <div className="row mx-0 form-container__wrapper">
        <div className="px-0 form__wrapper">
          <h3 className="text-center py-4 fw-bolder form-container__title">{title}</h3>
          <div className="px-3">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

FormContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default FormContainer;
