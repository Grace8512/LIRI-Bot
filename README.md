# Week10. LIRI-Bot



1. Clearly state the problem the app is trying to solve (i.e. what is it doing and why)

    When the user initially enters a command (node argv[2], argv[3]), the program runs through the terminal. 
    Match function is executed by receiving argv and matches the command and function for each command.
    The command is executed only when the command and keyword are called together.

2. Give a high-level overview of how the app is organized

    The liri.js consists of five functions.
    Concert and movie function request with Axios and spotify request with Spotify API.
    WhatItSays requests to the file system and brings up the data value when there is data.
    Lastly, it connects command and keyword with match function.

3. Give start-to-finish instructions on how to run the app

    Open the terminal to run the node and enter the value for the information you want to obtain.
    To get information about a band, enter the value of node liri.js certificate-this followed by the desired band or singer.
    When you call information about song, you attach the title of song after the code liri.js and the word Spotify-this-song       as above.
    Movie can also bring up information by typing the title after Movie's commend.
    what it says - It run spotify-this-song for "I Want it That Way," as follows the text in random.txt.

4. Include screenshots, gifs or videos of the app functioning

    https://drive.google.com/file/d/1E1eE81VFK_SEnJssQouoJj1UACOP7KJx/view


5. Contain a link to a deployed version of the app
    This app is not a web app; it's rather a console application. Therefore, there is no deployed version of this app.

6. Clearly list the technologies used in the app.
   * axios - In concerts and Movie Fiction, Url is requested through Axios and gets the result of the function back.

   * dotenv - process.env

   * fs - Using the fs Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's                 commands.

   * keys - In order to protect secrets, we use the dotenv library. process.env.XXX in keys.js will be replaced by values in               .env file, and .env file will not be version controlled(it won't be shown).

   * node-spotify-Api makes it easy for the developers to use Spotify API. We use the Spotify API to search songs and get          information about them.

7. State your role in the app development
