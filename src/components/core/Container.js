import React from 'react';
import {Outlet} from "react-router-dom";
import {Container as Container_} from "./../base";

const Container = () => {
    return (
        <Container_ maxWidth="lg" sx={{py:4}}>
            <Outlet/>
        </Container_>

            
    );
};

export default Container;