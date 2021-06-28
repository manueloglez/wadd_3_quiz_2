import React from 'react'

const BidDetails = (props) => {
  return <> 
    <p>$ {props.amount.toFixed(2)} on {new Date(props.created_at).toLocaleString()}</p>
    <p>By: {`${props.user.first_name} ${props.user.last_name}`}</p>
  </>
}

export default BidDetails