export default function(string){
	string = string || "This website does not support internet explorer"
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
        alert("This website does not support internet explorer");
    }
    return false;
}