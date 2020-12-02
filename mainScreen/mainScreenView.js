export default class mainScreenView{
    constructor(){
        this.grid = document.getElementById('grid');
    }
    generateMap(xTiles,yTiles){
        
        xTiles = Math.ceil(xTiles);
        yTiles = Math.ceil(yTiles);
        this.grid.style.gridTemplateColumns =`repeat(${xTiles}, calc(100vw / ${xTiles}))`;
        this.grid.style.gridTemplateRows = `repeat(${yTiles}, calc(100vh / ${yTiles}))`;
        for(let y = 1; y <= yTiles;y++){
            for(let x = 1; x <= xTiles;x++) {
                let tileElem = document.createElement('div');
                tileElem.classList.add('tile');
                tileElem.dataset.tileCoord = `[${x},${y}]`;
                tileElem.addEventListener("dragover", function(event) {
                     event.preventDefault();
                     console.log('over')
                    });
                tileElem.addEventListener("drop", function(event) {
                        var playerID = event.dataTransfer.getData("text/plain");
                        var player = document.getElementById(playerID);
                        player.parentNode.removeChild(player);
                        tileElem.appendChild(player);
                        event.preventDefault();
                    });
                grid.appendChild(tileElem);
            } 
        }
    }
    initPlayer(character, initX, initY){
        const playerElem = document.createElement('img');
        playerElem.src = character;
        playerElem.classList.add('playerImg');
        playerElem.draggable = "true";
        playerElem.id = character;
        // const tiles = document.querySelectorAll(".tile");
        const playerTile = document.querySelectorAll("[data-tile-coord='"+`[${initX},${initY}]`+"']");
        playerElem.addEventListener('dragstart', function (event) {
             event.dataTransfer.setData("text/plain", this.id);
            //  console.log(event.dataTransfer.getData("text/plain"));
             });
        playerTile[0].appendChild(playerElem);
    }
    //temporary function for figuring out how to zoom in to different areas of the map
    allowZoom() {
        window.addEventListener('scroll',function(){
            console.log('scrolling');
            var scrolled = window.scrollY / ( document.body.offsetHeight );
            console.log("window.scrollY: " + window.scrollY);
            console.log("scrolled: " + scrolled );
            var zoomLevels = 1; //change to have a different behavior
            var scale = Math.pow( 3, scrolled * zoomLevels);
            var images = document.getElementsByTagName("img");
            console.log("scale:" + scale);
            for(i=0;i<images.length;i++){
                images[i].width = Math.round(500/scale); //change 500 to your image size
                images[i].height = Math.round(500/scale); //change 500 to your image size
            }
        },true);
    }
}

// var player = null;
// for (var i=0; i < playerList.length; i++) {
//  player = playerList[i];
//  player.addEventListener('dragstart', function (event) {
//  // handle the dragstart event
//  event.dataTransfer.setData("text/plain", this.id);
//  });
// }
// var square = document.getElementById("square");
// square.addEventListener("dragover", function(event) {
//  event.preventDefault();
// });
// square.addEventListener("drop", function(event) {
//     var mouseID = event.originalEvent.dataTransfer.getData("text/plain");
//     var player = document.getElementById(item);
//     player.parentNode.removeChild(player);
//     play
// });


