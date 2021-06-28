import React from 'react';

const BidForm=({createBid, errors})=>{
  const handleSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData(event.currentTarget);
    const params={
      amount: formData.get('amount')
    }
    createBid(params);
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='amount'>New Bid</label>
        <input type="number" step="0.01" name='amount' id='amount'/>
      </div>
      <div>
        <input type='submit' value='Bid' />
      </div>
    </form>
  )
}
export default BidForm