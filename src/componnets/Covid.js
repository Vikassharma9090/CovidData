import React, { useEffect, useState } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './covid.css';

const Covid = () => {
    const[data,setdata]=useState([]);
  const getCovidData = async () => {
    const res = await fetch("https://api.covid19india.org/data.json");
    const actualData = await res.json();
    console.log(actualData.statewise);
    setdata(actualData.statewise);
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <h1 className="text-center">INDIA COVID-19 DASHBOARD </h1>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5">
            <span className="font-weight-bold ">INDIA</span>COVID-19 DASHBOARD
          </h1>
        </div>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th>State</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deatds</th>
                <th>Active</th>
                <th>Updated</th>
              </tr>
            </thead>
            <tbody>
              {data.map((curElem, ind) => {
                return (
                  <tr key={ind}>
                    <th>{curElem.state}</th>
                    <td>{curElem.confirmed}</td>
                    <td>{curElem.recovered}</td>
                    <td>{curElem.deaths}</td>
                    <td>{curElem.active}</td>
                    <td>{curElem.lastupdatedtime}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default Covid;
