# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all()
user1 = User.create!(username: 'Brandon', email: "brandonstudenta@gmail.com", password: "123457" )



Remedy.create(title:"Excersice Streches", mood_id:Mood.first, user_id:user1.id)



Mood.delete_all()

Mood.create!([
    { 
      name: "Sad",
      image_url: "https://thumbs.dreamstime.com/z/upset-sad-african-american-woman-suffering-loneliness-side-view-sitting-bed-alone-holding-head-hands-girl-has-163556023.jpg"
    }, 
    { 
      name: "Anxiety",
      image_url: "https://thumbs.dreamstime.com/z/sad-young-man-looking-down-depression-anxiety-disorder-concept-sad-man-looking-down-depression-anxiety-disorder-concept-103178781.jpg"
    },
    { 
      name: "Stressed",
      image_url: "https://thumbs.dreamstime.com/img/pixel.gif" 
    }
  ])
  