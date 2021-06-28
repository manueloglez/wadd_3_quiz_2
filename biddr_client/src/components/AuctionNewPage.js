import React, { useState } from 'react'
import AuctionForm from './AuctionForm';
import {Auction} from '../requests';

const AuctionNewPage = (props) => {
  const [state, setState] = useState({errors: {}})

  const createAuction = (params) => {
    Auction.create(params)
    .then(({id, errors})=>{
        if(errors) {
          setState(state => {
            return {errors}
          })
        }
        else props.history.push(`/auctions/${id}`)
    })
  }

  return(
    <main>
      <AuctionForm createAuction={createAuction}
      errors={state.errors}/>
    </main>
  )
}

export default AuctionNewPage