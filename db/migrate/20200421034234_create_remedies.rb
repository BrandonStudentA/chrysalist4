class CreateRemedies < ActiveRecord::Migration[6.0]
  def change
    create_table :remedies do |t|
      t.string :title
      t.string :description
      t.references :mood

      t.timestamps
    end
  end
end
