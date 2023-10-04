import React, { useContext } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import { publicRoutes, privateRoutes } from "../../router";
import { AuthContext } from "../../context";
import Loader from "../UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }

    return (
        isAuth
        ?
        <Routes>
            {privateRoutes.map(route =>
                <Route
                    element={<route.element/>}
                    path={route.path}
                    key={route.path}>
                </Route>
            )}
            <Route path='*' element={<Navigate to="/posts" />} />
        </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.element/>}
                    path={route.path}
                    key={route.path}>
                </Route>
            )}
            {/*<Route element={<About />} path="/about" />*/}
            {/*<Route element={<Posts />} path="/posts" />*/}
            {/*<Route element={<PostIdPage />} path="/posts/:id" />*/}
            <Route path='*' element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default AppRouter;
