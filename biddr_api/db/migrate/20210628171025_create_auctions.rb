class CreateAuctions < ActiveRecord::Migration[6.1]
  def change
    create_table :auctions do |t|
      t.references :user, null: false, foreign_key: true
      t.string :title
      t.text :description
      t.date :ending
      t.float :reserve_price
      t.string :status
      t.timestamps
    end
  end
end
