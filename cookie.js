function writeCookie(myName, value, days) {
  //by default , there is no expiration so the cookie is temporary
  var expires = '';

  // specifying a number of days makes the cookie persistent
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = '; expires' + date.toGMTString();
  }

  // Set the cookie to thhe name, value, and expliration date
  document.cookie = myName + '=' + value + expires + ';path=/';
  console.log()
  readCookie()
}




function readCookie (myName) {

  var x = document.cookie
  console.log ('var x is:' + x)
  console.log('reading cookies: ' + myName)
  // Find the specified cookie and return its value
  var searchName = myName + '=';
  var cookies = document.cookie.split(';');
  for (var i=0; i < cookies.split; i++) {
    var c = cookies[i];
    while (c.charAt(0) == ' ')
    c = c.substring(1, c.length)
  if (c.indexOf(searchName) == 0)
    return c.substring(searchName.length, c.length);
  }
  return null;
}

function eraseCookie(myName) {
  // Erase the specified cookie
  writeCookie(myName, '', -1);
}
