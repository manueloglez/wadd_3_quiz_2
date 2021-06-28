import React from 'react';

const AuctionDetails = (props) => {
  const {title, description} = props;
  return (
    <div>
      <h1 className="header">Article: {title}</h1>
      <p>Description: {description}</p>
    </div>
  );
};
export default AuctionDetails;
