var database
var canvas
var gameState=0
var playerCount
var form
var game
var player
function setup(){
    canvas=createCanvas(400,400)
    database = firebase.database()
    console.log(database)
    game=new Game()
game.getState()
game.start()
}

function draw(){

  
}
