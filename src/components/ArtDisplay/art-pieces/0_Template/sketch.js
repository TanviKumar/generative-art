import * as dat from 'dat.gui'; //Importing the GUI Library
export default function sketch(p){
/*================================================================ */
/*Default Values for Grid size (can be updated by the user) */
/*================================================================ */
    // Padding around the canvas.
    let padding = 15;
    let gap = 20;
    // Size of grid cells (cellSize x cellSize).
    let cellSize = 50;
    let gridSize;
/*================================================================ */
/*          Functions required for making the art-piece            */
/*================================================================ */
    // Setup function of p5.js.
    // It runs once when the art-piece is loaded
    p.setup = ()=>{
        // uiRow - Number of squares per row/column
        gridSize = cellSize * uiRow.getValue() + padding * 2;
        p.createCanvas(gridSize, gridSize);
        p.rectMode(p.CENTER);
        p.angleMode(p.DEGREES);
        p.createCanvas(gridSize, gridSize);
        p.strokeWeight(2);
        p.noLoop();
        p.frameRate(2);
    }
    // draw() runs after setup(), normally on a loop
    // in this case it runs only once, because of noLoop()
    p.draw = () => {
        p.background(255);
        for (let y = padding; y < p.height - 2 * padding; y += cellSize + gap) {
          for (let x = padding; x < p.width - 2 * padding; x += cellSize + gap) {
            drawCell(x, y);
          }
        }
    };

    function drawCell(x,y){
        p.push();
        p.translate(x, y);
        p.noFill();
        p.rect(0, 0, cellSize, cellSize);
        p.pop();
    }
/*================================================================ */
/*                    GUI Specific Properties                      */
/*================================================================ */
    // Create a class with the name of the art-piece
    // Add the properties to be changed by GUI
    // as class members
    class Example{
        constructor() {
            this.Row = 12;
        }
    }
    // Create a new class object
    const example = new Example();
    // Create gui object
    const gui = new dat.GUI();
    // Add the required properties to the GUI Controller
    const uiRow = gui.add(example,"Row",5,20,1);
    // On change of the property which functions to be called
    uiRow.onChange(()=>{
        p.setup();
        p.draw();
    });
    gui.close();
    window.onpopstate = function (e) {
        gui.destroy();
    };

}