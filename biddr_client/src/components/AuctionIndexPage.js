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
    {state.auctions.map(a => {
      return <Link key={a.id} to={`/auctions/${a.id}`}>
        <div>
        {a.title}
        </div>
      </Link>
    })}
    <a href="/auctions/new">
      <button>New Auction</button>
    </a>
  </main>
}

export default AuctionsIndexPage