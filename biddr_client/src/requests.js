const BASE_URL = `http://localhost:3000/api/v1`;

export const Session = {
  create(params) {
    return fetch(`${BASE_URL}/session`, {
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      method: 'POST',
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    })
  },
  destroy(){
    return fetch(`${BASE_URL}/session`, {
      method: 'DELETE',
      credentials: 'include'
    })
  }
}

export const User = {
  current() {
    return fetch(`${BASE_URL}/users/current`, {
      credentials: 'include',
    }).then(res => res.json())
  },
  create(params) {
    return fetch(`${BASE_URL}/users`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: params })
    }).then(res => res.json())
  }
}

export const Auction = {
  index() {
    return fetch(`${BASE_URL}/auctions`, {
      headers: {
        "Cache-Control": "no-cache",
      },
    }).then((res) => {

      return res.json();
    });
  }, 
  show(id) {
    return fetch(`${BASE_URL}/auctions/${id}`)
      .then((res) => res.json())
      .catch(console.error);
  },
  create(params) {
    return fetch(`${BASE_URL}/auctions`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  delete(id) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  update(id, params) {
    return fetch(`${BASE_URL}/auctions/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
}

export const Bid = {
  create(auctionid, params) {
    return fetch(`${BASE_URL}/auctions/${auctionid}/bids`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.json())
      .catch(console.error);
  },
  delete(id) {
    return fetch(`${BASE_URL}/bids/${id}`, {
      method: "DELETE",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch(console.error);
  }
}