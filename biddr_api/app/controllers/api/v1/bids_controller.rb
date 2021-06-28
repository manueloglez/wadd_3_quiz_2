class Api::V1::BidsController < Api::ApplicationController
  before_action :authenticate_user!

  def create
    @auction = Auction.find params[:auction_id]
    @bid = Bid.new bid_params
    @bid.auction = @auction
    @bid.user = current_user
    if @bid.save
      render json: {id: @bid.id}
    else 
      render(
        json: {errors: @bid.errors},
        status: 422
      )
    end
  end

  def destroy
    @bid = Bid.find(params[:id])
    if @bid.destroy
      head :ok
    else
      head :bad_request
    end
  end

  private
  def bid_params
    params.require(:bid).permit(:amount)
  end
  def find_bid
    @bid = Bid.find params[:id]
  end
end