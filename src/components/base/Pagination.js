import React from 'react';
import {Pagination as Pagination_} from "@mui/material";

const Pagination = ({children,...rest}) => {
    return (
        <Pagination_ hideNextButton={true} hidePrevButton={true} {...rest}>{children}</Pagination_>
    );
};

export default Pagination;