// maximum limit of collatz number
var limit = 10000;

// initial coordinates for translation
var centX = 5;
var centY = 1.9;

// ratio to reduce dimensions
var compressRatio = 0.18e+7;

// maximum size of nodeStack
var stackSizeLimit = 50000;

function setup() {
    createCanvas(1000, 900);
    angleMode(DEGREES);
    background(0);
    strokeWeight(1);
    noLoop();
}

function draw() {
    translate(width / centX, height / centY);
    push();
    collatzIterative();
    pop();
}

function setStroke(num) {
    Red = 255 * noise(num);
    Green = 255 * (1 - noise(num));
    Blue = 255 * noise(num);
    stroke(Red, Green, Blue);
}

function collatzIterative() {
    let nodeStack = [{
        "num": 1,
        "diff": 0,
        "index": 0
    }];

    // keeps track of visited indices
    let visitedSet = new Set();
    let indexCounter = 1;

    while ((nodeStack.length > 0) && (nodeStack.length <= stackSizeLimit)) {
        let node = nodeStack.pop();

        // if current node has been visited then this is a backtracking step
        if (visitedSet.has(node.index)) {
            pop();
            visitedSet.delete(node.index);
            continue;
        } else {
            visitedSet.add(node.index);
        }

        nodeStack.push(node);

        let rot_angle = node.diff * 10;
        rotate(rot_angle);
        setStroke(node.diff);

        let Ratio = limit / compressRatio;
        let len = node.diff * Ratio;
        line(0, 0, 0, len);
        translate(0, len);
        push();

        let nextNum = 0;
        let nextDiff = 0;

        // work your way up the collatz number tree
        if ((node.num > 1) && (node.num % 3 === 1)) {
            nextNum = (node.num - 1) / 3;
            nextDiff = -((node.num * 2) + 1) / 3;
            nodeStack.push({
                "num": nextNum,
                "diff": nextDiff,
                "index": indexCounter
            });
            indexCounter += 1;
        }

        // work your way up the collatz number tree
        if (node.num * 2 <= limit) {
            nextNum = node.num * 2;
            nextDiff = node.num;
            nodeStack.push({
                "num": nextNum,
                "diff": nextDiff,
                "index": indexCounter
            });
            indexCounter += 1;
        }
    }
}