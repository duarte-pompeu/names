/*
 * requests.js
 * Process GET requests.
 * 
 * Code taken from http://stackoverflow.com/a/831060
 */
 
function get_parameter(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

function get_current_url(){
	return window.location.href;
}

function load_new_meaning()
{
  name = document.getElementsByName("inputbox")[0].value;
  name = name.replace(" ", "+");
  
  // strip GET parameters from base URL
  url = get_current_url();
  i = url.indexOf("?");
  
  if(i > -1){
	  url = url.substring(0,i);
  }
  
  if(! (name == "" || name == "undefined")){
	  url = url + "?" + "name=" + name;
  }
  
  window.location.href = url;
}

function replace_fb_url(){
	url = get_current_url();
	
	var elem = document.getElementById("fb-button");
	elem.setAttribute("data-href", url);
}

