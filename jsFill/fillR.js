class Room {
    constructor(name, itemsCount) {
        this.name = name;
        this.itemsCount =  itemsCount;
    }
}

let r1 = new Room('Predavaonica 1', 50);
let r2 = new Room('Predavaonica 2', 50);
let r3 = new Room('Predavaonica 3', 50);
let r4 = new Room('Predavaonica 4', 50);
let r5 = new Room('Predavaonica 5', 50);
let r6 = new Room('Predavaonica 6', 50);
let r7 = new Room('Portirnica', 50);
let r8 = new Room('Referada', 50);

var rooms = [r1,r2,r3,r4,r5,r6,r7,r8];

function fill(){
    var ul = document.querySelector(".druga");
    while(ul.firstChild) ul.removeChild(ul.firstChild);
        for (var i = 0; i < rooms.length; i++) {
  
            var listItem = document.createElement("li");
            var x = document.createElement("h2");
            var y = document.createElement("h3");
            x.textContent = rooms[i].name
            y.textContent = "Broj predmeta: 50"
            
            listItem.appendChild(x);
            listItem.appendChild(y);

            ul.appendChild(listItem);
        }
}
function m(){
    fill();
}
//----------------------------------------------
    
var f = true;
var promjena = document.getElementsByClassName(".desno");
function myFunction(){
    fillRooms(f);
    f = !f;
}

function fillRooms(f){
    if(f == true){
        rooms.reverse();
        fill();
        //promjena.innerHTML = "Poredaj po imenu ︿";
    }
    else{
        rooms.reverse();
        fill();
        //promjena.innerHTML = "Poredaj po imenu ﹀";
    }
}


  