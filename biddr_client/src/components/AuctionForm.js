import React from 'react';

const AuctionForm=({createAuction, errors})=>{
  const handleSubmit=(event)=>{
    event.preventDefault();
    const formData=new FormData(event.currentTarget);
    const params={
      title: formData.get('title'),
      description: formData.get('description'),
      reserve_price: formData.get('reserve_price'),
      ending: formData.get('ending'),
      status: 'draft'
    }
    createAuction(params);
  }
  return(
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input type="text" name='title' id='title'/>
      </div>
      <div>
        <label htmlFor='description'>Description</label>
        <input type="text" name='description' id='description'/>
      </div>
      <div>
        <label htmlFor='reserve_price'>Reserve Price</label>
        <input type="number" step="0.01" name='reserve_price' id='reserve_price'/>
      </div>
      <div>
        <label htmlFor='ending'>Ending Date</label>
        <input type="date" min={new Date().toISOString().slice(0, 10)} name='ending' id='ending'/>
      </div>
      <div>
        <input type='submit' value='Create Auction' />
      </div>
    </form>
  )
}
export default AuctionForm