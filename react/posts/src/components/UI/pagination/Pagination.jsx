import React from 'react';
import { usePagination } from "../../../hooks/usePagination";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = usePagination(totalPages);

    return (
        <div className="page__wrapper">
            {pagesArray.map(pageNumber =>
                <span
                    onClick={() => changePage(pageNumber)}
                    key={pageNumber}
                    className={pageNumber === page ? 'page page__current' : 'page'}>
                        {pageNumber}
                    </span>
            )}
        </div>
    );
};

export default Pagination;
