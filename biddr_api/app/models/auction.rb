class Auction < ApplicationRecord
  belongs_to :user
  has_many :bids, dependent: :destroy
  validates(:reserve_price, numericality: { greater_than: 0 })
  validates(:title, presence: true, uniqueness: true)
  validates(
    :description, 
    presence: { message: "must include a description" },
    length: { minimum: 10 },
  )
  validates_inclusion_of(:status, in: ["draft", "published", "reserve_met"])
end
