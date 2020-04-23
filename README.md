# README




ERD (Entity Relationship Diagram):
![ERD & WIRE_FRAME](app/wireframe/Diagram1.png)


Technologies used:


An explanation of the major challenges you expect to face while building this app

Timeframes

your estimates can help you organize your workload better, for e.g.
Component	Priority	Estimated Time	Actual Time
Adding Form	H	3hrs	3.5hrs
Working with API	H	3hrs	2.5hrs
Total	H	6hrs	5hrs



Chrysalis App : 
The Chrysalis Apps provides a interactive user experince focus on provding the user with simple user friendly holistic solutions for unpleasent moods/emotions. For example Chrysalis will lauch with a list of moods: Anxeity, Anger, Sadness, restless.... 


Each mood will listed upon the user registration and sign in.  The moods will have routes to remodies that have been known in the holistic community to provide some diy remodies

Intially each mood will have a few catagories: Excersices, Nutrtion, and Body-Work. there will be a list of a few solutions that in each category.


As metioned the user will need to be able to register and create an account. the user will have complete a simple form with a username, email and password. 


User will have full access to Create, Read, Update, Delete the user own account detail.

This App will have an Admin who will be able to Create, Read, Update, Delete content.

This will be a starting point for luanch with the Objective to build upon.

Routes:\

emedies_path 	GET 	/remedies(.:format) 	

remedies#index
	POST 	/remedies(.:format) 	

remedies#create
remedy_path 	GET 	/remedies/:id(.:format) 	

remedies#show
	PATCH 	/remedies/:id(.:format) 	

remedies#update
	PUT 	/remedies/:id(.:format) 	

remedies#update
	DELETE 	/remedies/:id(.:format) 	

remedies#destroy
moods_path 	GET 	/moods(.:format) 	

moods#index
	POST 	/moods(.:format) 	

moods#create
mood_path 	GET 	/moods/:id(.:format) 	

moods#show
	PATCH 	/moods/:id(.:format) 	

moods#update
	PUT 	/moods/:id(.:format) 	

moods#update
	DELETE 	/moods/:id(.:format) 	

moods#destroy
users_path 	GET 	/users(.:format) 	

users#index
	POST 	/users(.:format) 	

users#create
user_path 	GET 	/users/:id(.:format) 	

users#show
	PATCH 	/users/:id(.:format) 	

users#update
	PUT 	/users/:id(.:format) 	

users#update
	DELETE 	/users/:id(.:format) 	

users#destroy

# Chrysalisp-4
