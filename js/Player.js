class Player {
  constructor() {
    this.name = null
    this.index = null
    this.posx = 0
    this.posy = 0
  }
  addPlayer(){
    if(this.index==1){
      this.posx = width/2 - 130
    } else{
      this.posx = width/2 + 130
    }
    database.ref("players/player"+this.index).set({
      name:this.name,
      posx:this.posx,
      posy:this.posy
    })
  }
  getCount(){
    database.ref("playerCount").on("value",data=>{
      playerCount=data.val()
    })
  }  
  updateCount(num){
    database.ref("/").update({
      playerCount:num
    })
  }
  getPosition(){
    database.ref("players/player"+this.index).on("value",data=>{
      var playerPos = data.val()
      this.posx = playerPos.posx
      this.posy = playerPos.posy
    })
  }  
  updatePosition(){
    database.ref("players/player"+this.index).update({
      posx:this.posx,
      posy:this.posy
    })
  }
  static getPlayerinfo(){
    database.ref("players").on("value",data=>{
      allPlayers=data.val()
    })
  }
}
