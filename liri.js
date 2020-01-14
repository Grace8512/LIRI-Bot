var axios = require("axios");
require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js");
var spotify = require("node-spotify-api");
var spotifyAPI = new spotify(keys.spotify);

// process.argv[0];//0번째 아이템인 노드
// [1]//liri.js
// [2]//concert-this

//각각의 커멘드마다 펑션을 만들어준다. 

function concert(artist){
    var url = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(url).then(function(response){
        var bodyList = response.data;//response.body가 스트링으로 리턴이 되기 때문에 우리가 원하는 타입으로 바꿔주는(리스트나 딕셔너리로) 역할. 
        for(var i=0; i < bodyList.length; i++){
            var bodyInfo = bodyList[i];
            
            console.log("Time: " + bodyInfo.datetime);
            console.log("Venue Name: " + bodyInfo.venue.name);
            console.log("Venue Location: " + bodyInfo.venue.city +','+bodyInfo.venue.country);
        }
    }).catch(function(err){
        console.log(err);
    });
}

function spotifySong(s){
    spotifyAPI.search({ type:'track', query: s }, function(err, data){
        if(err){
            console.log('error occurred: ' + err);
        }else{
            // console.log(Object.keys(data.tracks.items[0]));
            var info = data.tracks.items;
            for(var i=0; i<info.length; i++){
                console.log("Album Name: " + info[i].album.name);
                var artistNames = "Artists: ";
                for(var j=0; j<info[i].artists.length; j++){
                    artistNames += ", " + info[i].artists[j].name;
                }
                console.log(artistNames);
                console.log("Name: " + info[i].name);
                console.log("Preview_url: " + info[i].preview_url);
                console.log('');
            }
        }
    });
}

function movie(m){
    var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + m + "&type=movie";
    axios.get(url).then(function(response){
        var body = response.data;//response.body가 스트링으로 리턴이 되기 때문에 우리가 원하는 타입으로 바꿔주는(리스트나 딕셔너리로) 역할. 
        console.log("Title: " + body.Title);
        console.log("Year: " + body.Year);
        console.log("ImdbRating" + body.imdbRating);
            
        for(var i=0; i<body.Ratings.length; i++){
            if(body.Ratings[i].Source === 'Rotten Tomatoes'){
                console.log(body.Ratings[i].Value);//ratings안에 대괄호안이 로튼 토마토일 경우 밸류의 값을 출력한다.  
            }
        }
        console.log(body.Country);
        console.log(body.Language);
        console.log(body.Plot);
        console.log(body.Actors);
    }).catch(function(err){
        console.log(err);
    });
}

function whatItSays(w){
    fs.readFile("random.txt", function(err, data){
        if(err){
            console.log("error!");
        }else{
            var changeStr = data.toString().split(",");
            match(changeStr[0], changeStr[1]);
        }
    });
}

function match(commend, keyWord){
    if(commend === "concert-this"){
        concert(keyWord);
    }else if(commend === "spotify-this-song"){
        spotifySong(keyWord ? keyWord : "The Sign");//ternary operators
    }else if(commend === "movie-this"){
        movie(keyWord ? keyWord : "Mr.Nobody");
    }else if(commend === "do-what-it-says"){
        whatItSays(keyWord);
    }else{
        console.log(commend + " is not vaild");
    }
}
match(process.argv[2], process.argv[3]);


