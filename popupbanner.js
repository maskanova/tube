//startPopup
window.onload = startPopup;
function startPopup() {
setTimeout(function(){ 
document.getElementById('popupbanner').style.display = 'block';
},10*1000);
}
// hidePopup
function HidePopup() {
document.getElementById('popupbanner').style.display = 'none';
setInterval(function(){ 
document.getElementById('popupbanner').style.display = 'block';
},60*1000);
}
