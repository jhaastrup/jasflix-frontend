import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = props => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;

  //calculate the total number of pages .....
  const pagesCount = Math.ceil(itemsCount / pageSize); //use Math.ceil to convert decimals to whole numbers
  if (pagesCount === 1) return null;
  //npm lodash, use it to create an array for the number of pages
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
          >
            <i className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </i>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired
};

export default Pagination;
