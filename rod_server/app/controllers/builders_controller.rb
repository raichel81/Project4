class BuildersController < ApplicationController
  before_action :set_builder, only: [:show, :edit, :update, :destroy]

  # GET /groups
  # GET /groups.json
  def index
    @builders = Builder.all
    # respond_to do |format|
    #   format.json { render @builders.as_json }
    # end
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
  end

  def search
    @builders = Builder.search params[:data][:query]
    render json: @builders.as_json
  end

  # GET /groups/new
  def new
    @builder = Builder.new
  end

  # GET /groups/1/edit
  def edit
  end

  # POST /groups
  # POST /groups.json
  def create
    @builder = Builder.new(builder_params)
    @builder.user = current_user

    respond_to do |format|
      if @builder.save
        current_user.builder = @builder
        current_user.save!
        format.html { redirect_to @builder, notice: 'Builder was successfully created.' }
        format.json { render :show, status: :created, location: @builder }
      else
        format.html { render :new }
        format.json { render json: @builder.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    respond_to do |format|
      if @builder.update(builder)
        format.html { redirect_to @builder, notice: 'Builder was successfully updated.' }
        format.json { render :show, status: :ok, location: @builder }
      else
        format.html { render :edit }
        format.json { render json: @builder.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @builder.destroy
    respond_to do |format|
      format.html { redirect_to builders_url, notice: 'Builder was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_builder
      @builder = Builder.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def builder_params
      params.require(:builder).permit(:name, :phone, :bio, :location, :minprice, :maxprice, :ship, :rodtype, :species, :poleblank)
    end
end
