# LookLive server

The project you're looking at is an [express.js](http://expressjs.com) project. You'll use it to get set up a development environment where you're
going to optimize the way this project works. In it's current state, the css is messy, the rendering isn't modern and
overall the product is boring and not efficient. It's up to you to fix this and improve it.

## Getting started

### Step 1 - clone the repo
Github provides some instructions for this and we're assuming that you know how to clone this repo. If you're not sure,
don't hesitate to raise your hand now and ask.

### Step 2 - install dependencies
In order to run the server you'll need to install express.js and it's dependencies. In order to do this, open up a 
terminal and navigate to your project folder (for example `cd ~/Projects/looklive-server`). When you've done this, type
this command to run the instal:

```
npm install
```

That should get you setup.

### Step 3 - running the server
To run the server, stay at the 'root' of your project folder and type:

```
npm start
```

That will get the server to run on port 3000. If you go to [http://localhost:3000](http://localhost:3000) in your browser
you should see an overview page.

## The api

This project comes with a simple API. All you need to know for now is that there's three endpoints:

* `/api/feed/` <- returns a feed of appearances
* `/api/appearance/:uuid` <- returns a single appearance, more detailed than in the feed. Replace `:uuid` with the 
appearance id.
* `/api/product/:uuid` <- returns a single product, including similar and bargain products. Replace `:uuid` with the 
product id.

The API returns JSON (for now).

#Performance
Changes made:

* Semantic HTML & CSS Selectors improved
* Header image changed from PNG to JPG
* Icons in top menu changed from PNG to spritesheet
* Removed jQuery
* Removed slow custom font
* Changed amount of content loaded initially


Improvements for next week:

* Instead of timeline screenshots, screenshots of DOM loaded & Data loaded would be better only just noticed this


##Semantic HTML & CSS Selectors Optimized

###Before
![alt tag](/screenshots/html_before.png)
###After
![alt tag](/screenshots/html_after.png)

##Header image changed

###Before
![alt tag](/screenshots/header_before.png)
###After
![alt tag](/screenshots/header_after.png)

###Icons changed

###Before
![alt tag](/screenshots/images_before.png)
###After
![alt tag](/screenshots/images_after.png)

###jQuery removed
###Before
![alt tag](/screenshots/jquery_before.png)
![alt tag](/screenshots/jquery_before_1.png)
###After
![alt tag](/screenshots/jquery_after.png)

###NOTE: Network is really slow for the following 2 changes so data is different from last couple of changes

###Custom font removed
###Before
![alt tag](/screenshots/font_before_1.png)
![alt tag](/screenshots/font_before_2.png)
![alt tag](/screenshots/font_before_3.png)
###After
![alt tag](/screenshots/font_after_1.png)

###API HTML Return
###Before
![alt tag](/screenshots/api_html_return_before.png)
###After
![alt tag](/screenshots/api_html_return_after.png)


###Lazyloading/Pagination
###Before
![alt tag](/screenshots/content_before.png)
###After
![alt tag](/screenshots/content_after.png)
