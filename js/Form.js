class Form {
  constructor(){
    this.input = createInput("").attribute("placeholder","Name")
    this.title = createImg("assets/title.png")
    this.button = createButton("Play")
    this.greet = createElement("h2")
    this.reset = createButton("Reset")
  }
  // ()=>{} Arrow function
  display(){
    this.input.position(width*0.425,height*0.45)
    this.input.style("background-color","transparent")
    this.title.position(370,30)
    this.title.size(500,75)
    this.reset.position(width*0.9,30)
    this.reset.mousePressed(()=>{
      database.ref('/').set({
        playerCount : 0,
        gameState : 0,
        players : {}
      })
      location.reload()
    })
    this.button.position(width*0.47,height*0.55)
    this.button.mousePressed(()=>{
      this.greet.html("Hello, "+ this.input.value())
      this.greet.position(width*0.425,height*0.45)
      this.input.hide()
      this.button.hide()
      player.name = this.input.value()
      playerCount = playerCount + 1
      player.index = playerCount
      player.updateCount(playerCount)
      player.addPlayer()
      player.getPosition()
    })
  }

  hide(){
    this.input.hide()
    this.button.hide()
    this.title.hide()
    this.greet.hide()
  }
}
