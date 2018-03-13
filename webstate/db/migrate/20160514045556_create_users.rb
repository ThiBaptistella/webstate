class CreateUsers < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.column "UserName", :string, :limit=>25
      t.string "UserPassword", :limit=>50
      t.string "UserEmail", :limit=>200
      t.string "UserFirstName", :limit=>100
      t.string "UserSurname", :limit=>100
      t.string "UserPhone", :limit=>50
      t.column "UserAdmin", :Boolean, :default=> false
      #t.datetime "created_at"
      #t.datetime "updated_at"
      
      t.timestamps null: false
    end

  end
  def down
  	drop_table :users
  end
end
