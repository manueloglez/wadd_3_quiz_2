import React, {useEffect, useState} from 'react'
import { Auction } from '../requests'
import { Link } from 'react-router-dom' 

const AuctionsIndexPage = () => {
  const [state, setState] = useState({auctions: []})

  useEffect(() => {
    Auction.index().then(auctions => {
      setState((state) => {
        return {auctions}
      })
    })
  }, [])
  return <main>
    <h1>Auctions <Link to="/newauction">
      <button>New Auction</button>
    </Link></h1>
    {state.auctions.map(a => {
      return <Link key={a.id} to={`/auctions/${a.id}`}>
        <div>
        {a.title}
        </div>
      </Link>
    })}
  </main>
}

export default AuctionsIndexPage