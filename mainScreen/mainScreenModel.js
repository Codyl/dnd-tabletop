class mapSquare {
    constructor(x,y,w,h) {
        //x and y are for top left corner for the square
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h;
        this.centerX = this.x + this.width/2;
        this.centerY = this.y + this.height/2;
    }

}
export default class MainScreenModel {
    constructor() {
        this.xSquares = 24;
        this.ySquares = 12;
        this.squares = [this.xSquares][this.ySquares];
    }
    getCoordinate(x,y){
        let coordinate;
        return coordinate;
    }
}