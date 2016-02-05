class PolesController < ApplicationController
  before_action :set_pole, only: [:show, :edit, :update, :destroy]

  # GET /groups
  # GET /groups.json
  def index
    @poles = Pole.all
    # respond_to do |format|
    #   format.json { render json: @poles.as_json }
    # end
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
  end

  # GET /groups/new
  def new
    @pole = Pole.new
  end

  # GET /groups/1/edit
  def edit
  end

  # POST /groups
  # POST /groups.json
  def create
    @pole = Pole.new(pole_params)

    respond_to do |format|
      if @pole.save
        format.html { redirect_to @pole, notice: 'Pole was successfully created.' }
        format.json { render :show, status: :created, location: @pole }
      else
        format.html { render :new }
        format.json { render json: @pole.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    respond_to do |format|
      if @pole.update(pole_params)
        format.html { redirect_to @pole, notice: 'Pole was successfully updated.' }
        format.json { render :show, status: :ok, location: @pole }
      else
        format.html { render :edit }
        format.json { render json: @pole.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @pole.destroy
    respond_to do |format|
      format.html { redirect_to poles_url, notice: 'Pole was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_pole
      @pole = Pole.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def pole_params
      params.require(:pole).permit(:name)
    end
end
