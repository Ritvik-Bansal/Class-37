class Form {
  constructor() {
    this.input = createInput("").attribute("placeHolder", "Enter Your Name");
    this.playButton = createButton("PLay");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("H2");
  }

  setElementsPosition(){
    this.titleImg.position(120,100)
    this.input.position(width/2-110, height/2-80);
    this.playButton.position(width/2-90, height/2-60);
    this.greeting.position(width/2-100, height/2-150);

  }
  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }

  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }

  display() {
   this.setElementsPosition();
    //this.setElementsStyle();
    this.handleMousePressed();
  }
}

