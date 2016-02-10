# Rod Broker
WDI05 Project 4

<img src="http://i.imgur.com/Fuw3kLZ.jpg" alt="logo">  

###About

Rod Broker is a website where local fishing rod craftsman can sell their wares to a national and international audience. Builders can come in and make a page that lists what types of fishing rods they make and upload photos. Users can search builders by the data they enter, or generally search any builder. Users must log-in to see the Builder contact information.

Insight aggregates text and pushes it into the Watson PI API, this allows us to describe the personality of a group of people to describe the personality of groups talking about a trending twitter topic, user or string, or generally any text (1000 character - 25000 character) entered by the user. A switch at the bottom will allow you to select Twitter or other. The produced personalities are transformed into Myers Briggs types, and visualized via D3 tools. If a user logs in to our validated login we’ll give the option of saving previous personality profiles, showing recent profiles and commenting on them.


###Installation

You must have Bower, NPM and Rails installed to use this application.

To install:
<ol>
  <li> Copy the repository onto your computer </li>
  <li> 'npm init' and 'npm install' in the main folder</li>
  <li> In the server folder, 'rake db:create', then 'rake db:migrate' </li>
  <li> 'Bundle Install' in the same folder</li>
  <li> 'rails s' to start up the server<li>
  <li> Now open another terminal window in the client folder, 'bower install'</li>
  <li> Start your client-side server with 'http-server'</li>
Now visit 'Localhost:8080' to take it for a spin!


###Tech

Front end:
AngularJS, Bootstrap, Bower, CSS

Back end:
Ruby, Rails 

Gems:
Devise, Carousel, Paperclip, ImageMagickBootstrap-Form, D3js, Skrollr, Puma

URL: https://rod-client.firebaseapp.com
User stories: https://trello.com/b/F5ao0qaT/rod-broker
Repository: https://github.com/erikapallasmoore/Project4
Wire frames: in this folder