import React, { useState } from 'react';
import './bidPage.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faPlus,faAngleDown, faFilter } from '@fortawesome/free-solid-svg-icons';

const BidPage = () => {
  const data = [
    {
      bidNumber: '#122345678123',
      date: '14/02/2024',
      time: '05:40 PM',
      createdBy: 'Sunder Yadav',
      startDateTime: '14/02/2024 05:40 PM',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Gurgaon',
      toCity: 'Mumbai',
      vehicleType: 'Truck, 20 ft',
      vehicleDetails: 'Close body, 1',
      materialWeight: '4000 Kg',
      response: '4 View results',
      assignedStaff: 'Mohit 5215001161264',
      details: 'View Details',
      loadingDate: '17/02/2024',
      phoneNumber: '+91 332423442442',
      targetPrice: 'Rs 5000',
      numberOfBidders: 54,
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
    },
    ...Array(4).fill({
      bidNumber: '#122345678123',
      date: '14/02/2024',
      time: '05:40 PM',
      createdBy: 'Sunder Yadav',
      startDateTime: '14/02/2024 05:40 PM',
      bidTimeRemaining: '7hr 20min',
      fromCity: 'Gurgaon',
      toCity: 'Mumbai',
      vehicleType: 'Truck, 20 ft',
      vehicleDetails: 'Close body, 1',
      materialWeight: '4000 Kg',
      response: '4 View results',
      assignedStaff: 'Mohit 5215001161264',
      details: 'View Details',
      loadingDate: '17/02/2024',
      phoneNumber: '+91 332423442442',
      targetPrice: 'Rs 5000',
      numberOfBidders: 54,
      material: 'Agricultural Products',
      weight: '14 Tonnes',
      requestDate: '15/02/2024',
      expiryDate: '15/02/2024',
      remarks: 'Urgent Delivery',
    }),
  ];

  const [expandedRow, setExpandedRow] = useState(null);

  const handleToggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };
  const handleViewLess = () => {
    setExpandedRow(null);
  };
  

  return (
    <div className="content">
        <div className='bid-header'>
        <div className='bid-header2'>
        <div className="header-item" >Live</div>
        <div className="header-item" >Results</div>
          <div className="header-item" >History</div>

            <div className="search-bar">
      <input type="text" placeholder="Search..." className="search-input" />
      <button className="search-button">
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
        </div>
        <div className='header-item'>
  <button>
  <FontAwesomeIcon icon={faPlus} /> Create
  </button>
</div>

        </div>
    


      <div className="header2">
      <div className="header2">
        <div className="header-item" style={{ color: 'black' }}>Live (30)</div>
        <div className="header-item" style={{ color: 'green' }}>Responded (30)</div>
        <div className="header-item" style={{ color: 'red' }}>Unresponded (30)</div>
        </div>
        <div className="header2">
        <div className="header-item">Bid Created</div>
        <div className="header-item">Today</div>
        <div className="header-item">Yesterday</div>
     
        <div class="header-item dropdown">
  <button class="dropdown-toggle">Calendar 
    <FontAwesomeIcon icon={faAngleDown} className="dropdown-icon" />
  </button>
</div>
        <div className='header-item'> <FontAwesomeIcon icon={faFilter} className="dropdown-icon" /></div>
      </div>
      </div>
      <div id='table' className="table-container">
        <div className="table-header">
          <div>S No.</div>
          <div>Bid Number</div>
          <div>Created By</div>
          <div>Start Date & Time</div>
          <div>Bid Time Remaining</div>
          <div>From City</div>
          <div>To City</div>
          <div>Vehicle Type, Size</div>
          <div>Body, No. of Vehicle</div>
          <div>Material Weight</div>
          <div>Response</div>
          <div>Assigned Staff</div>
          <div>Details</div>
        </div>
        {data.map((row, index) => (
          <React.Fragment key={index}>
            <div className="table-row" onClick={() => handleToggleRow(index)}>
              <div>{index + 1}</div>
              <div>{row.bidNumber}</div>
              <div>{row.createdBy}</div>
              <div>{row.startDateTime}</div>
              <div>{row.bidTimeRemaining}</div>
              <div>{row.fromCity}</div>
              <div>{row.toCity}</div>
              <div>{row.vehicleType}</div>
              <div>{row.vehicleDetails}</div>
              <div>{row.materialWeight}</div>
              <div>{row.response}</div>
              <div>{row.assignedStaff}</div>
              <div>{row.details}</div>
            </div>
            {expandedRow === index && (
              <div className="bid-details">
                <div className="bid-details-container">
                  <div className="bid-number"><strong>Bid No:</strong> {row.bidNumber} ({row.createdBy})</div>
                  <div className="location"><i className="fas fa-map-marker-alt"></i> <strong>Location:</strong> Manesar, Gurugram, Haryana</div>
                  <div className="loading-point"><i className="fas fa-truck-loading"></i> <strong>Loading Point:</strong> Ramchandra Ramniwas oil mill, Alwar Rajasthan</div>
                  <div className="unloading-point"><i className="fas fa-truck-unloading"></i> <strong>Unloading Point:</strong> Ramchandra Ramniwas oil mill Alwar, Rajasthan</div>
                  <div className="vehicle-loading-date"><i className="fas fa-calendar-alt"></i> <strong>Vehicle loading date:</strong> {row.loadingDate}</div>
                  <div className="vehicle-type"><i className="fas fa-truck"></i> <strong>Vehicle Type:</strong> {row.vehicleType}</div>
                  <div className="material"><i className="fas fa-box"></i> <strong>Material:</strong> {row.material}</div>
                  <div className="request-date"><i className="fas fa-calendar-check"></i> <strong>Request Date:</strong> {row.requestDate}</div>
                  <div className="remarks"><i className="fas fa-exclamation-circle"></i> <strong>Remarks:</strong> {row.remarks}</div>
                  <div className="assigned-staff"><i className="fas fa-user"></i> <strong>Assigned Staff:</strong> {row.assignedStaff}</div>
                  <div className="vehicle-fuel-type"><i className="fas fa-gas-pump"></i> <strong>Vehicle Fuel Type:</strong> CNG</div>
                  <div className="weight"><i className="fas fa-weight"></i> <strong>Weight:</strong> {row.weight}</div>
                  <div className="expiry-date"><i className="fas fa-calendar-times"></i> <strong>Expiry Date:</strong> {row.expiryDate}</div>
                  <div className="phone-number"><i className="fas fa-phone-alt"></i> <strong>Phone number:</strong> {row.phoneNumber}</div>
                  <div className="target-price"><i className="fas fa-money-bill-alt"></i> <strong>Target Price:</strong> {row.targetPrice}</div>
                  <div className="number-of-bidders"><i className="fas fa-users"></i> <strong>Number of Bidders:</strong> {row.numberOfBidders}</div>
                  <div className="view-details">
                  <a href="#table" onClick={handleViewLess}>View Less</a>
                  </div>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
   
    
  );
};

export default BidPage;
