function getUserInfo() {
			
	        FB.api('/me?fields=posts', function(response) {
	 			var arr = [];
		        var length = response["posts"]["data"].length;
		        var i = 0;
		        while(i < length){
		        	arr.push(response["posts"]["data"][i]["message"]);
		        	i++;
		        }
		        alert(arr);
	 
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