import React from 'react';
import BidDetails from './BidDetails'

const BidList = (props = {})=> {
  function compare( a, b ) {
    if ( a.created_at > b.created_at ){
      return -1;
    }
    if ( a.created_at < b.created_at ){
      return 1;
    }
    return 0;
  }

  const { bids } = props;
  bids.sort(compare)

  return (
    <div>
      {bids ? bids.map((bid,i) => {
        return <BidDetails key={i} {...bid}/>
      }):''}
    </div>
  )
}
export default BidList