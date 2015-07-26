function getUserInfo() {
			
    FB.api('/me?fields=posts', function(response) {
			var arr = [];
        var length = response["posts"]["data"].length;
        var i = 0;
        while(i < length){
        	arr.push(response["posts"]["data"][i]["message"]);
        	i++;
        }
        alert(which_president(arr));

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
     },{scope: 'user_posts'});

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
	var substring_arr = ["communism", "socialism", "equality", "social", "justice", "warrior", "racis", "sexis", "jew", "old", "elderly"];
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
    alert(top_candidate);
	return top_candidate;

}