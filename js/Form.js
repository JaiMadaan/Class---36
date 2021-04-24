class Form {
constructor(){}
display(){
var title= createElement('h2')
title.html('Car Racing Game ')
title.position(250,0)
var input = createInput("Name")
var button = createButton("PLAY")
var greeting= createElement('h2')
input.position(250,160)
button.position(370,200)
button.mousePressed(function(){
input.hide()
button.hide()
var name= input.value()
playerCount+=1

player.update(name)
player.updateCount(playerCount)
greeting.html("Hello"+name)
greeting.position(250,160)

})

}


    
}