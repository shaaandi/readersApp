import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { renderRoutes } from 'react-router-config';
import Header from './components/Header';
import { fetchCurrentUser } from './queries/auth';

function App(props) {
    let [onMount] = useState(0);
    let { route, location } = props;

    let { data, loading, error } = useQuery(fetchCurrentUser);

    if (loading) {
        return (
            <div id="custom-loader">
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>
            </div>
        );
    }

    let { currentUser: user } = data;
    return (
        <div className="container-fluid">
            <Header currentUser={data.currentUser} location={location} />
            {renderRoutes(route.routes, { user })}
        </div>
    );
}

export default App;
