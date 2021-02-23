import React from 'react';

const Aviation = () => {
    return (
<div className="container">
  <div className="d-flex flex-column text-center">
    
    <h1 className="title">
      <span>
        Time
      </span>
      <span>
        Table
      </span>
    </h1>
    
    <div className="row click-row">
      <div className="container click-col"  id="click-col-id">
        <a className="table-link" href="#table-section">
          <i className="fas fa-chevron-down p-3  bg-white" id="table-chevron-id"></i>
        </a>
      </div>
    </div>
  </div>
    
  <section id="table-section">
      <div className="row time-row justify-content-center" id="time-row-id">
        <div className="table-responsive col-12 col-sm-12">
        <table className=" table time-container" id="time-container-id">
          <thead >
            <tr >
              {/* <th>
              </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th> <h1 id="time-title">Time Table </h1> </th>
              <th></th>
              <th></th>
              <th></th>
              <th></th> */}
              <th colSpan="10"><h1 id="time-title">Time Table </h1></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <h1 id="tt">Total Time </h1>
              </th>
              <th>
                <h1 id="pic">PIC</h1>
              </th>
              <th>
                <h1 id="sic">SIC</h1>
              </th>
              <th>
                <h1 id="dual">Duel Given</h1>
              </th>
              <th>
                <h1 id="solo">Solo</h1>
              </th>
              <th>
                <h1 id="inst">Instrument</h1>
              </th>
              <th>
                <h1 id="xc">CrossCountry</h1>
              </th>
              <th>
                <h1 id="night">Night</h1>
              </th>
              <th>
                <h1 id="multi">Multiengine</h1>
              </th>
              <th>
                <h1 id="turb">Turbine</h1>
              </th>
            </tr>

            <tr>
              <td>
                <h1 id="tt-num">1306</h1>
              </td>
              <td>
                <h1 id="pic-num">1099</h1>
              </td>
              <td>
                <h1 id="sic-num">81</h1>
              </td>
              <td>
                <h1 id="dual-num">790</h1>
              </td>
              <td>
                <h1 id="solo-num">152</h1>
              </td>
              <td>
                <h1 id="inst-num">165</h1>
              </td>
              <td>
                <h1 id="xc-num">387</h1>
              </td>
              <td>
                <h1 id="night-num">171</h1>
              </td>
              <td>
                <h1 id="multi-num">168</h1>
              </td>
              <td>
                <h1 id="turb-num">84</h1>
              </td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    
      <div className="row rating-row justify-content-center" id="rating-row-id">
      <div className="table-responsive col-12 col-sm-12 col-md-6">
        {/* <table className="container col-xs col-sm col-md col-lg col-xl table-responsive rating-containter" id="rating-container-id"> */}
        <table className="table rating-containter" id="rating-container-id">
          <thead>
            <tr>
              <th>
                <h1 id="ratings">Ratings </h1>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="ratings">CE-525 PIC Type Rating</td>
            </tr>
            <tr>
              <td className="ratings">CE-500 SIC Type Rating</td>
            </tr>
            <tr>
              <td className="ratings">Multiengine Instructor</td>
            </tr>
            <tr>
              <td className="ratings">Certified Flight Instructor Instrument</td>
            </tr>
            <tr>
              <td className="ratings">Certified Flight Instructor</td>
            </tr>
            <tr>
              <td className="ratings">Commercial Multiengine</td>
            </tr>
            <tr>
              <td className="ratings"> Commercial Single Engine </td>
            </tr>
            <tr>
              <td className="ratings">Instrument</td>
            </tr>
            <tr>
              <td className="ratings">Private Pilot</td>
            </tr>
          </tbody>
        </table>
      </div>        
      </div>
    
    </section>
</ div>
    )
}

export default Aviation;