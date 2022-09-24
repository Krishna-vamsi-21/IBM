import React from 'react';
import Graph from '../components/Graph';

const Analytics = () => {
    return (
        <div>
            <h1>Calories</h1>
            <div>

                <Graph />
                <h3 align="center">Today</h3>
            </div>
            <div>

                <Graph />
                <h3 align="center">Yesterday</h3>
            </div>
            <div>

                <Graph />
                <h3 align="center">Day before Yesterday</h3>
            </div>
        </div>
    );
};

export default Analytics;