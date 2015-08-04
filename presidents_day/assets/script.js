var president_img = [];
president_img["Donald Trump"] = "donald_trump.jpg";
president_img["Hillary Clinton"] = "hillary_clinton.jpg";
president_img["Jeb Bush"] = "jeb_bush.jpg";
president_img["Bobby Jindal"] = "bobby_jindal.jpg";
president_img["Bernie Sanders"] = "bernie_sanders.jpg";

var president_desc = [];
president_desc["Donald Trump"] = "You're sort of self-obsessed and spend a lot of time at the Country Club, but it really doesn't matter because you're rich!";
president_desc["Hillary Clinton"] = "You're kind of bland and change your mind a lot, but overall you're pretty likeable and amicable to most people.";
president_desc["Jeb Bush"] = "Based on your Facebook posts, you're a burger-grilling, fish-catching, jeep-riding outdoorsman. Go 'Murica!";
president_desc["Bobby Jindal"] = "You have basically been silent throughout the entire race, and no one really cares about what you have to say.";
president_desc["Bernie Sanders"] = "Despite being labeled a Liberal Hippie Communist Scumbag by the right, you're honestly pretty cool and care a ton about everyone around you!";

function getUserInfo() {
    alert("first here");
    FB.api('/me?fields=posts.limit(300),likes.limit(300)', function(response) {
        alert("now here");
        alert(response);
		var arr = [];
        var len = response["posts"]["data"].length;
        var i = 0;
        while(i < len){
        	arr.push(response["posts"]["data"][i]["message"]);
        	i++;zz
        }
        i = 0
        len = response["likes"]["data"].length;
        while(i < len){
        	arr.push(response["likes"]["data"][i]["name"]);
        	i++;
        }
        console.log(arr);
        var president = which_president(arr);
        document.body.style.backgroundImage = "url('assets/"+ president_img[president] + "')";
        document.getElementById("cover-heading").innerHTML = president;
        document.getElementById("description").innerHTML = president_desc[president];
	});
}

function myFacebookLogin() {
	FB.login(function(response) {
       if (response.authResponse) 
       {
            getUserInfo();
        } else 
        {
         console.log('User cancelled login or did not fully authorize.');
        }
     },{scope: 'user_posts, user_likes'});

}

function process_arr(arr){
	return arr.join(' ').toLowerCase().replace(/[\.,-\/#!?@$%\^&\*;:{}=\-_`~()]/g,"")
}

function all_occurences(string, substring_arr){
	var total = 0;
    var i = 0;
    while(i < substring_arr.length){
        //alert(substring_arr[i])
		total += countInstances(string, substring_arr[i]);
        i++;
	}
	return total;
}

function countInstances(string, word) {
   var substrings = string.split(word);
   return substrings.length - 1;
}

//rich, famous, angry, violent, shameless, confident
function donald_trump_score(arr){
	var joined = process_arr(arr);
	var substring_arr = ["rich", "wealthy", "cocky", "hate", "loser", "rich", "suck", "dumbasses", "fuck", "golf", "tennis"];
	return all_occurences(joined, substring_arr);
}

//flip flopper, family, stagnant, boring, experienced
function hillary_clinton_score(arr){
	var joined = process_arr(arr);
	var substring_arr = ["family", "good", "boring", "lenient", "bored", "boring", "democrat", "experienced", "universal healthcare", "feminism", "women", "equality"];
	return all_occurences(joined, substring_arr);
}

//dynastic, american, work harder, other shit
function jeb_bush_score(arr){
	var joined = process_arr(arr);
	var substring_arr = ["florida", "mexico", "bush", "beer", "oil", "fracking", "howdy", "beef", "steak", "bacon", "pork", "south"];
	return all_occurences(joined, substring_arr);
}

//no one cares
function bobby_jindal_score(arr){
	if(arr.length <= 3){
		return 1000;
	}
    return 0;
}

//equality, socialism, free, old, hippie
function bernie_sanders_score(arr){
	var joined = process_arr(arr);
	var substring_arr = ["communism", "socialism", "equality", "social", "justice", "warrior", "racis", "sexis", "old", "elderly", "gay rights", "gay", "rights"];
	return all_occurences(joined, substring_arr);

}

function which_president(arr){
	var candidates = [];
	candidates["Donald Trump"] = donald_trump_score(arr);
	candidates["Hillary Clinton"] = hillary_clinton_score(arr);
	candidates["Jeb Bush"] = jeb_bush_score(arr);
    
	candidates["Bobby Jindal"] = bobby_jindal_score(arr);
	candidates["Bernie Sanders"] = bernie_sanders_score(arr);
	candidates["candidates_list"] = ["Donald Trump", "Hillary Clinton", "Jeb Bush", "Bobby Jindal", "Bernie Sanders"];
	var score = 0;
	var top_candidate = "Hillary Clinton";
    var i = 0;
    while(i < candidates["candidates_list"].length){
        var candidate = candidates["candidates_list"][i];
        if(candidates[candidate] > score){
			top_candidate = candidate;
			score = candidates[candidate];
		}
        i++;    
    }
	return top_candidate;

}