import React from 'react';
import {Auction} from '../requests'

const AuctionDetails = (props) => {
  const {title, description, status, ending, publishAuction} = props;

  return (
    <div>
      <h1 className="header">Article: {title}</h1>
      <p>Description: {description}</p>
      <p>Ending Date: {ending}</p>
      <p>Status: {status} {status === 'draft' ? <button onClick={publishAuction}>Publish Auction</button> : ''}</p>
      
    </div>
  );
};
export default AuctionDetails;
