#Online op:
http://146.185.134.66:3000/


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


#Week 3
Changes made:

* Gulp or Grunt research
* Web fonts & content

##Gulp or Grunt?

Gulp or Grunt are both build tools which help you speed up the process of optimizing your code before pushing it
online. There are many other build tools for JavaScript like harp, mimosa, brunch, jake and Brocolli. All the tools mentioned before
are in my opinion inferior due to one reason; less users. (with one of the exceptions being Brunch but it offers basically the same
as Gulp and Grunt). Build tools are something you can add on but what do you need? Usually this question is answered partly for you after
years of coding and work experience as you tend to do the same things over and over again. But the easy solution for this is looking at 
other people's grunt/gulp configs and see what things would come in hand for you. That's why an active userbase that shares ideas is also
very important.

Now for the differences between the two, The biggest difference is that grunt focuses on configuration while gulp focuses on code.
Grunt seems to be more of a list of commonly used tasks you can add while Gulp as I explained before let's the community create all
these little tasks that help speed up the process.

According to one of the sources gulp is a lot faster than grunt due to I/O speeds being very slow  while in-memory operations are fast.
Also Grunt compiles all files for every single change which adds extra build time.

For the reasons mentioned above I've decided to use Gulp.


Sources: 
* http://jaysoo.ca/2014/01/27/gruntjs-vs-gulpjs/
* http://www.hongkiat.com/blog/gulp-vs-grunt/


##HTTP Requests

![alt tag](/screenshots/requests_before.png)
![alt tag](/screenshots/requests.png)

As you can see the number of HTTP requests has lowered. Could've been 1 less if we we're allowed to do the service worker registration inline :p /s

##Minified CSS & JS

Before

440ms / 3.4s

After

428ms / 3.2s
 

##Fonts

Not much change, just 1 load to extra font, already shown below for week 1.
Now added font observer that adds font-loaded class.

##Conclusion

The biggest changes that needed to be made to the website were definately images. There is alot to gain here in terms of performance.
That also means loading content differently and maybe thinking of another setup for the list page.

Minifying the JS and changing this for this project as listed below didn't change too much but it's definately an important thing to do
especially in bigger projects as for bigger projects this can save a lot of loading time.

Minifying and changing CSS selectors didn't change much either but as with the JS it's important to do, same counts for semantic HTML.


#Week 2
Changes made:

* Service worker added
* Progressive web app research (below)
* Fixed missing points last week (below)

Improvements for next week:

* API JS can be more clean
* Service Worker more worked out
* Domain

##Progressive web app research

Nieuwe technieken gaan vaak unnoticed voorbij, een voorbeeld hiervan is de XMLHTTP request.
Deze request bestond al 5 jaar voordat AJAX werd gemaakt, vaak zijn er dus mogelijkheden maar
weten developers niet dat deze bestaan en om dit te gebruiken. Zo werd het web een lange tijd gezien
als iets heel anders dan een native app op je telefoon.

Een progressive web app is het ideaal beeld van een mobiele website, een website die eruit ziet
en werkt zoals een app en waardoor mensen dit dus prettig op hun kleine device te gebruiken vinden.

Wat is nou eigenlijk zo'n progressive web app? In het kort is het een website die sneller en zelfs
offline te gebruiken is naarmate je hem vaker gebruikt, de app verandert op basis van jouw gedrag 
erop net als een native app zou werken met alle instellingen, enige verschil? het is gewoon een website
met een URL.

De verschillen tussen web apps en native apps zijn natuurlijk nog wel aanwezig maar steeds minder.
Zo zijn de 2 kern punten die een website een progressive web app maken de "Service worker" en "Homescreen link",
een service worker zorgt ervoor dat je de site kan cachen en dus ook offline zal kunnen bezoeken waar je ook bent.
Een homescreen link is heel simpel een snelkoppeling op je telefoon zoals je die voor al je apps hebt, veel mensen
die geen verstand hebben van techniek zullen hier het verschil in maken; als het een shortcut heeft is het een app! 
Als je een url moet intypen is het een website! Dat is natuurlijk niet van deze tijd maar de gedachtegang is er zeker.

Responsive web apps komen steeds vaker voor, zo vraagt chrome je na 2x dezelfde link te bezoeken of je hem in je dock wilt
zetten tussen alle apps. Wat echter nog een probleem is is dat HTTPS erg belangrijk is voor de web app, zo is het internet
natuurlijk een stuk minder veilig dan je native app, daarvoor is HTTPS de oplossing echter wordt dit nog niet ondersteund of
automatisch gedaan door elke site (Looking at you Amazon!).


###Sources:
* https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/
* https://www.quora.com/What-are-progressive-web-apps
* http://arc.applause.com/2015/11/30/application-shell-architecture/
* http://developer.telerik.com/featured/what-progressive-web-apps-mean-for-the-web/

##Header image fixed:

![alt tag](/screenshots/header_fixed.png)

##Transition translate fixed:

![alt tag](/screenshots/transition_fixed.png)

##Script body fixed:
Placed this after the HTML at the end of the body so HTML loads even if JS contains errors.

##Single page app

#Week 1
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
