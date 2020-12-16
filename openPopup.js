window.onload = function openNewTab() {
setInterval(function (){
var win = window.open('https://autoambyar.blogspot.com/','_blank');
if (win) {
//Browser has allowed it to be opened
win.focus();
} else {
//Browser has blocked it
alert('Please allow popups for this website');
}
},60*1000);
};
