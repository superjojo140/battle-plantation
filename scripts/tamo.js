const currentStory = new Story(intro, "messageContainer");

const SPRITESHEET = new TiledSpritesheet("data/assets/spritesheet.png", 1, 16, 16, 31, 57) //Kenny Spritesheet see data/maps/Kenney RPG Tiles.tsx
//TODO Parse this information automatixally from tsx file

let mapParser;
let player;

const PLAYER_SPEED = 3;


/*
PIXI STUFF
*/


let type = "WebGL"
if (!PIXI.utils.isWebGLSupported()) {
  type = "canvas"
}

//Create a Pixi Application
let app = new PIXI.Application({
  width: 400,
  height: 400
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);


renderMap();


$(document).keydown(function (event) {
  if (player) {
    switch (event.key) {
      case "ArrowUp":
        player.vy = -1 * PLAYER_SPEED;
        break;
      case "ArrowDown":
        player.vy = 1 * PLAYER_SPEED;
        break;
      case "ArrowLeft":
        player.vx = -1 * PLAYER_SPEED;
        break;
      case "ArrowRight":
        player.vx = 1 * PLAYER_SPEED;
        break;
    }
  }
});

$(document).keyup(function (event) {
  if (player) {
    switch (event.key) {
      case "ArrowUp":
        player.vy = 0;
        break;
      case "ArrowDown":
        player.vy = 0;
        break;
      case "ArrowLeft":
        player.vx = 0;
        break;
      case "ArrowRight":
        player.vx = 0;
        break;
    }
  }
});

function gameLoop(delta) {
  if (player) {
    player.x += player.vx;
    player.y += player.vy;
  }
}


function renderMap() {
  let mapContainer = new PIXI.Container();
  mapParser = new TiledMapParser(mapContainer, SPRITESHEET, "data/maps/map1.json", function () {
    player = mapParser.player;
    app.ticker.add(delta => gameLoop(delta));
    app.stage.addChild(mapContainer);
  });

}
