export default class mainScreenView{
    constructor(){
        this.gridElement = document.getElementById('grid');
    }

    generateMap(xTiles,yTiles){
        //css calc() only accepts integers so we must convert xTiles and yTiles by rounding up.
        xTiles = Math.ceil(xTiles);
        yTiles = Math.ceil(yTiles);
        this.gridElement.style.gridTemplateColumns =`repeat(${xTiles}, calc(100vw / ${xTiles}))`;
        this.gridElement.style.gridTemplateRows = `repeat(${yTiles}, calc(100vh / ${yTiles}))`;
        //iterate for the width and height to draw all the div's
        for(let y = 1; y <= yTiles;y++){
            for(let x = 1; x <= xTiles;x++) {
                let tileElement = document.createElement('div');
                tileElement.classList.add('tile');
                tileElement.dataset.tileCoord = `[${x},${y}]`;
                //Event listeners for dragging player tokens into the div.
                tileElement.addEventListener("dragover", function(event) {event.preventDefault();});
                tileElement.addEventListener("drop", function(event) {
                        const playerID = event.dataTransfer.getData("text/plain");
                        const playerElement = document.getElementById(playerID);
                        playerElement.parentNode.removeChild(playerElement);
                        tileElement.appendChild(playerElement);
                        event.preventDefault();
                    });
                gridElement.appendChild(tileElement);
            } 
        }
    }
    initPlayer(characterImageName, initX, initY){
        const playerElem = document.createElement('img');
        playerElem.src = characterImageName;
        playerElem.classList.add('playerImg');
        playerElem.draggable = "true";
        playerElem.id = characterImageName;
        const playerTile = document.querySelectorAll("[data-tile-coord='"+`[${initX},${initY}]`+"']");
        playerElem.addEventListener('dragstart', function (event) {
             event.dataTransfer.setData("text/plain", this.id);
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