document.write("2. This is a competition. In this competition, there are three winners."+"<br>"+" The first will get the gold medal, the second will get silver, and the third, bronze."+"<br>"+"(use filter method)"+"<br>");
document.write("-------------------------------------------------------------"+"<br>");
let arr=["Anna", "Beth", "Cara"];

let g_w=arr.filter(function(value,index){
    return index==0;
});
document.write("Gold winner: "+g_w+"<br>");

let s_w=arr.filter(function(value,index){
    return index==1;
});
document.write("Silver winner : "+s_w+"<br>");

let b_w=arr.filter(function(value,index){
    return index==2;
});
document.write("Bronze winner : "+b_w+"<br>");


