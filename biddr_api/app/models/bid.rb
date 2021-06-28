class Bid < ApplicationRecord
  belongs_to :user
  belongs_to :auction
  validates(:amount, numericality: { greater_than: 0 })
  before_save do
    if amount > self.auction.reserve_price
      self.auction.update status: "reserve_met"
    end
  end
end
