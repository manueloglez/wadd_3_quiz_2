import React, { useEffect, useState } from 'react'
import { Auction, Bid } from '../requests'
import AuctionDetails from './AuctionDetails'
import BidList from './BidList'
import BidForm from './BidForm'

const AuctionShowPage = (props) => {
  const [state, setState] = useState({auction: {}})

  useEffect(() => {
    const { params } = props.match;
    Auction.show(params.id).then(auction => {
      setState({auction})
    })

  }, [state.auction.bids])

  const createBid = (params) => {
    Bid.create(props.match.params.id, params)
    .then(bid => {
      setState(state => {
        state.auction.bids.push(bid)
        return state
      })
    })
  }

  const { bids = [] } = state.auction;

  return <main>
    <AuctionDetails {...state.auction}/>
    <BidForm createBid={createBid} errors={state.errors}/>
    <h1>Previous Bids</h1>
    <BidList bids={bids} />
  </main>

}

export default AuctionShowPage