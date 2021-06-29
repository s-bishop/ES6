"use strict";

class Room {
    constructor(name, length, width, capacity = 15){
        this.name = name;
        this.length = length;
        this.width = width;
        this.available = true;
        this.capacity = capacity;
    }
    //methods go here, outside constructor
    getArea(){
        return this.length * this. width
    }
    getPerimeter(){
        return 2 * (this.length + this.width);
    }
}

let room1 = new Room ("Sun", 30, 20);
let room2 = new Room ("Green", 15, 20, 18);

//change things ex. room1.width = 50

console.log("room1's name:", room1.name);
console.log("room1's length:", room1.length);
console.log("room1'swidth:", room1.width);
console.log("room1's area:", room1.getArea());
console.log("room1's perimeter:", room1.getPerimeter());

console.log("room2's name:", room2.name);
console.log("room2's length:", room2.length);
console.log("room2'swidth:", room2.width);
console.log("room2's area:", room2.getArea());
console.log("room2's perimeter:", room2.getPerimeter());

//Phase 2
room2.available = false;

console.log("room1's available", room1.available);
console.log("room2's available", room2.available);

//phase 3
// 9 see new parameters

console.log("room1's capacity", room1.capacity)
console.log("room2's capacity", room2.capacity)