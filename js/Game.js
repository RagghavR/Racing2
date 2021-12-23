class Game {
  constructor() {}

  getState(){
    database.ref("gameState").on("value",data=>{
      gameState=data.val()
    })
  }  
  updateState(num){
    database.ref("/").update({
      gameState:num
    })
  }

  start() {
    form = new Form();
    form.display();
    player = new Player();
    player.getCount()
    car1 = createSprite(width/2-150,height-100)
    car2 = createSprite(width/2+150,height-100)
    car1.addImage(car1Img)
    car2.addImage(car2Img)
    car1.scale = 0.07
    car2.scale = 0.07
    cars = [car1,car2]
  }
//!= not equal to
  play(){
    form.hide()
    Player.getPlayerinfo()
    if(allPlayers!=undefined){
      image(trackImg,0,-height*5,width,height*6)
      var index = 0
      for (var i in allPlayers){
        index = index + 1
        var x = allPlayers[i].posx
        var y = allPlayers[i].posy
        cars[index - 1].position.x = x
        cars[index - 1].position.y = y + 500
      }
      if(keyIsDown(UP_ARROW)){
        player.posy = player.posy - 10
        player.updatePosition()
      }
      if(keyIsDown(LEFT_ARROW)){
        player.posx = player.posx - 10
        player.updatePosition()
      }
      if(keyIsDown(RIGHT_ARROW)){
        player.posx = player.posx + 10
        player.updatePosition()
      }

      drawSprites()
    }
  }
}
