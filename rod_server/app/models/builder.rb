class Builder < ActiveRecord::Base
  include PgSearch
  belongs_to :user

  pg_search_scope :search, 
                  :against => [:species, :rodtype, :ship, :location, :poleblank],
                  :using => {
                    :tsearch => {:any_word => true}
                  }

  # This method associates the attribute ":image" with a file attachment
  has_attached_file :image,
                    :styles => {large: "1000x1000>", medium: "300x300>", thumb: "100x100#"},
                    default_url: "/images/:style/missing.png"

  # Validate the attached image is image/jpg, image/png, etc
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  def image_url
    image.url(:medium)
  end
end
