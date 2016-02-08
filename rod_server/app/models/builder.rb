class Builder < ActiveRecord::Base
  include PgSearch
  belongs_to :user

  pg_search_scope :search, 
                  :against => [:species, :rodtype, :ship, :location, :poleblank],
                  :using => {
                    :tsearch => {:any_word => true}
                  }
end
