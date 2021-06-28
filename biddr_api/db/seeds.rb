# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

PASSWORD = "123"

Bid.delete_all
Auction.delete_all
User.delete_all

super_user = User.create(
  first_name: "Manuel",
  last_name: "Gonzalez",
  email: "mang.95@gmail.com",
  password: PASSWORD,
)

10.times do
  User.create(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: PASSWORD,
  )
end

users = User.all
status_list = ["draft", "published"]

20.times do
  a = Auction.create(
    title: Faker::Commerce.product_name ,
    description: Faker::Lorem.paragraph_by_chars(number: rand(11..100)),
    reserve_price: Faker::Commerce.price(range: 10..1000) ,
    status: status_list.sample,
    ending: Faker::Date.forward(days: 23),
    user: users.sample
  )
  if a.valid? and a.status == "published"
    last_bid = 0
    a.bids = rand(5..15).times.map do
      b = Bid.new(
        amount: last_bid + rand(1.0..100.0),
        user: users.sample
      )
      last_bid = b.amount
      b
    end
  end
end