class RemediesController < ApplicationController
  before_action :set_remedy, only: [:show, :update, :destroy]
  before_action :authorize_request, except: [:index, :show]
  # GET /remedies
  def index
    @remedies = Remedy.all

    render json: @remedies
  end

  # GET /remedies/1
  def show
    render json: @remedy
  end

  # POST /remedies
  def create
    @remedy = Remedy.new(remedy_params)

    if @remedy.save
      render json: @remedy, status: :created, location: @remedy
    else
      render json: @remedy.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /remedies/1
  def update
    if @remedy.update(remedy_params)
      render json: @remedy
    else
      render json: @remedy.errors, status: :unprocessable_entity
    end
  end

  # DELETE /remedies/1
  def destroy
    @remedy.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_remedy
      @remedy = Remedy.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def remedy_params
      params.require(:remedy).permit(:title, :description, :mood)
    end
end
