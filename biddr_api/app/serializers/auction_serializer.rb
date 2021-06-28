class AuctionSerializer < ActiveModel::Serializer
  attributes(:id, :title, :description, :ending, :reserve_price, :status)
  has_many :bids

  class BidSerializer < ActiveModel::Serializer
    attributes :id, :amount, :user, :created_at
  end
end
