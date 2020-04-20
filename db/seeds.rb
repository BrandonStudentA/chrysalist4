# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



Admin.create!(username: 'Dustin', email: "dusty@gmail.com", password: "123457" )

User.create!(username: 'Brandon', email: "brandonstudenta@gmail.com", password: "123457" )