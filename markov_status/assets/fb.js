function fbLogin(){
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1621729421479588',
      xfbml      : true,
      version    : 'v2.6'
    });

    FB.ui({
      method: 'share_open_graph',
      action_type: 'og.likes',
      action_properties: JSON.stringify({
        object:'https://developers.facebook.com/docs/',
      })
    }, function(response){
      // Debug response (optional)
      console.log(response);
    });
  };

  (function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}

function fbLogin(){
  window.fbAsyncInit = function() {
    FB.init({
      appId      : '1621729421479588',
      xfbml      : true,
      version    : 'v2.6'
    });

    FB.login(function(){
      // Note: The call will only work if you accept the permission request
      FB.api('/me/feed', 'post', {message: 'Hello, world!'});
    }, {scope: 'publish_actions'});
  };

  (function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "https://connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

}

function myFacebookLogin(){
   var str = "You are about to log in with Facebook. This application will use your Facebook Statuses to generate a new Markov Chain based status.";
    sweetAlert({
        title: "Facebook Login", 
        text: str
    }, 
    function(){
      fbLogin();
      
    });
  
}