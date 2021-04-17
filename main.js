var arry=["Chicken Tandoori Pizza","Veg Supreme Pizza","Paneer Tikka Pizza","Deluxe Veggie Pizz","Veg Extravaganza Pizza"]
function menu(){
    var htmldata;
    htmldata="<ol class='menulist'>";
    arry.sort();
    for(var i=0;i<arry.length;i++){
        htmldata=htmldata+'<li>'+ arry[i] + '</li>'
    }
    htmldata=htmldata+"</ol>"
    document.getElementById("view_menu").innerHTML=htmldata;
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    arry.push(item);
    arry.sort();
    for(var i=0;i<arry.length;i++){
        htmldata=htmldata+'<div class="card">'+'<img src="images/pizzaImg.png"/>'+arry[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}