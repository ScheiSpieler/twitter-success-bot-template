## Discord to Twitter Success Bot Template
## [Twitter: RaffleBotter](https://twitter.com/RaffleBotter) <br> Discord: TyIer#0001 <br> <br> Please star if you find this useful 🤠 
## Requirements:
- twit
- discord.js
- request-promise-native
- Discord dev account
- Twitter dev account
## Set-up
- ### Twitter
  - Applying for access</br>
    If you do not have access to a twitter developer account, follow these instructions below.

    - Go to: https://developer.twitter.com/en/apply-for-access
    - Click apply for developer account and select hobbyist.
    - After that chose "making a bot" and "Get Started".
    - Scroll down and fill in the information and click next.
    - In the "Intended Use" section, scroll down and uncheck all the switches.
    - Now paste the following into the "How will you use...." answer box (or write your own).
    
            I plan to make a bot that will take pictures from a discord server and 
            post them to the twitter account with a string of words saying who the 
            image is from (including the discriminator) and from what discord server.
            
    - Click Next , Next , agree to the agreement and policy and submit application.</br>
      (Make sure you have a phone number and email address hooked up to the twitter account)
    
    A majority of the time you will instantly get a verification email that you can quickly accept and continue, 
    but sometimes they take a week or two to review your application and decide to approve or decline it.
    
    If you get the latter, just wait and come back to this after getting verified.
    
      - Once you are verified, go to: 
    
- ### Discord
  - ### Discord Developer Portal
     - Go to: https://discord.com/developers/applications
     - Click new application and name it.
     - You should see a screen similar to this: </br></br>
       ![image](https://user-images.githubusercontent.com/53065396/121133622-92009900-c800-11eb-96cd-4429cb78fbdc.png)
       (This Discord bot was deleted after this tutoral)</br></br>
     - Change the name and image to your desire.
     - You then want to navigate to "Bot", click "Add Bot", "Yes do it!".
     - This is where the public bots information is displayed, editing the icon and username here will change the bots in-app appearances.
     - ### COPY TOKEN FOR LATER (settings.json in code)
     - Click "OAuth" and scroll down.
     - In the "SCOPES" section, select "bot" (see image below)</br></br>
       ![image](https://user-images.githubusercontent.com/53065396/121134668-abeeab80-c801-11eb-946f-d065a7831ffe.png)</br></br>
     - Scroll down again and chose the permissions you want to give the bot (Administrator is what I personally do)</br>
       ![image](https://user-images.githubusercontent.com/53065396/121134823-d93b5980-c801-11eb-820a-15d019c20c15.png)</br></br>
     - Then copy the link and paste in into a new tab.
     - Select the server you want to add it to and click continue.</br>
       (NOTE: you can only add it to servers you have admin or higher perms in)
     - Click "Continue", "Authorize", and your set.
  - ### Discord Application
      All we need from the actually discord application is the success channel id (or whatever channel you want to pull the images from).</br>
      NOTE: your discord account needs to have "Developer Mode" turned on, to see a tutorial on how to turn it on, click [here](https://www.howtogeek.com/714348/how-to-enable-or-disable-developer-mode-on-discord/).
      - Right click the channel you want to get the id of and select "Copy ID".
      
      Boom done!
 
    
- ### Code 
  - ### Coding Nooby
    In this tutorial we will be using VSC (Visual Studio Code) as our IDE.
    - Go to: https://code.visualstudio.com/Download
    - Download the correct file based on your operating system.
    - Go through the setup and launch the program.
    - You should see a screen similar to this: 
      ![image](https://user-images.githubusercontent.com/53065396/121138148-6a5fff80-c805-11eb-937e-3bf7615d6067.png)
    - You then want to open the file you saved the code to.
    - Firstly you want to fill in all the information from the twitter developer portal found [here]() in settings.json.
    - This is also where we want to put the discord token and channel id from earlier (see section "Discord" above).
    - We also want to go to .env and paste our discord token in there.
    - If you want to edit the text in the tweet or discord response embed, you can navigate to index.js
    - Once there, scroll down until you see something similar to this.
      ![image](https://user-images.githubusercontent.com/53065396/121138543-d0e51d80-c805-11eb-85eb-cb2d8b1c10a5.png)
    - .setTitle, .setDescription, and .setColor are all apart of the message the discord bot sends and are fully customizable.
    - Var params holds two values, staus and media_ids, if you wish to edit the message that is posted on the twitter with this image, change the status.</br>
      (NOTE: make sure all text is wrapped in "" or '')
    - We now need to download Node [here](https://nodejs.org/en/download/) and our package files.
    - Once you went through the Node setup, right click in VSC under where the files are located.
    - You then want to click "Open in Intergated Terminal".
    - In here, we want to run two different commands, first we will type "node ." then click enter.
    - After that finishes, we can run "npm init".
    - You will notice we have two new files "package-lock.json" and "package.json"
    - Now we will install our requirements, to do so run the following commands in the terminal:</br>
      "npm install twit"</br>
      "npm i discord.js"</br>
      "npm i request-promise-native"</br>
    
    Your code is now ready to be hosted!

  - ### Knowledgable
        Download the code and open it in your IDE.</br></br>
        Firstly you want to fill in all the information from the twitter developer portal found [here]() in settings.json.</br>
        This is also where we want to put the discord token and channel id from earlier (see section "Discord" above).</br>
        We also want to go to .env and paste our discord token in there.
        Next we can go to index.js and edit the color or text to your liking. (see code comments)
        After that we can open up the console and run "node ." and "npm init"
        Now we will install our requirements, to do so run the following commands in the terminal:</br></br>
            "npm install twit"
            "npm i discord.js"</br>
            "npm i request-promise-native"</br>
        
     Your code is now ready to be hosted! 
     
- ### Hosting 
  Luckily for us there is a ton of free hosting sites out there, today we will be using heroku.com .</br>
  Navigate to: https://signup.heroku.com/login or if you have an account already, please login.</br>
  Enter all your information and chose "hobbyist" as your role and "Node.js" as your primary development language.</br>
  
  After you login, you should see a scree with all your apps. (If not navigate to: https://dashboard.heroku.com/apps)
  
  Here we will click "New" and "Create new app"
  
  We will then name our app, chose our region and click "Create app"
  
  Your screen should now look something similar to this:
  ![image](https://user-images.githubusercontent.com/53065396/121140281-aac07d00-c807-11eb-9c4f-a15dd8dc02a6.png)

  We will be using Heroku CLI as our deployment tool. See [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install) 
  for download link or (less recommended, paste and run "npm install -g heroku" in your VSC console).
  
  After that is all setup, we will run "heroku login" in our console, when prompted to, click any key to open the browser (excluding q).
  
  Your VSC should now have opened a new tab with something that looks similar to this:
  ![image](https://user-images.githubusercontent.com/53065396/121140928-6a153380-c808-11eb-8e51-797c9234b5db.png)
  
  Click login and your heroku account is now hooked up with VSC.
  
  If you do not already have git installed, click [here](https://git-scm.com/downloads) and set it up.
  
  Now we want to run "heroku git:remote -a (heroku application name)" in our console, this will initialize a git repository.</br>
  After that we can run "git add .", "git commit -am "make it better", and "git push heroku master"
  
  After its done building, we can go back to heroku and click on the "Resources" tab.</br>
  Once there, we can refresh and see that two different dynos pop up, see below:
  ![image](https://user-images.githubusercontent.com/53065396/121142393-ee1beb00-c809-11eb-8cc4-2f9110fdc53f.png)
  
  We want to click the pen icon on both of them and uncheck the "npm start" one and check the "node index.js" one and hit confirm.
  ![image](https://user-images.githubusercontent.com/53065396/121142537-14418b00-c80a-11eb-98ba-8b67b9b72225.png)

  Now we're all set, the bot is being hosted, but there is one catch to using heroku for free.</br>
  You are limited to 1,000 free dyno hours a month (if you hook up billing information which you will have to).</br>
  This is fine for us though as we are only running one dyno and the longest it could be on for a in a month is 744 hours(total hours in a 31 day month).</br>

  Heroku will never charge this billing, but if you wish to be save you can add a VCC with a spending limit.

  To add your billing information, click your profile icon in the top right corner and then account settings.
  
  Then navigate to billing and add your billing info.
  
  Congratulations, you are now hosting your twitter success bot for completely free.
  
- ### Last Step 
  Star my repository if it helped 😎
## Questions:
If you have any questions feel free to message me over discord: TyIer#0001 or [twitter](https://www.Twitter.com/RaffleBotter).
