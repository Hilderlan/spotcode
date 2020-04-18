class Album < ApplicationRecord
  belongs_to :category
  belongs_to :artist
end
