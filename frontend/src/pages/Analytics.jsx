import React from 'react';
import Graph from '../components/Graph';

const Analytics = () => {
    return (
        <div>
            <div
        style={{
          height: "4rem",
          backgroundColor: "#9FC9F3",
          margin: 0,
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h2 style={{ marginLeft: "15px" }}>calories</h2>
      </div>
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