module.exports = new JSONLoader();
function JSONLoader(){
  var self = this;

  self.load = function(location,callback){
    var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", location, true);
    xhr.onreadystatechange = function(){
      if (xhr.status==200 && xhr.readyState==4){
        try{
          callback(null,JSON.parse(xhr.responseText) );
        }catch(err){
          callback(err,null);
        }
      }
    }
    xhr.send();
  };
};