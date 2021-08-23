// terminating condition for recursion
var limit = 10000;

// used to reduce the lengths of lines
var compressRatio = limit / 50;

function setup() {
    createCanvas(1300, 1100);
    angleMode(DEGREES);
    background(0);
    strokeWeight(1.1);
}

function setStroke(seed) {
    let red = 255 * noise(seed);
    let green = 255 * (1 - noise(seed));
    let blue = 255 * noise(seed);
    stroke(red, green, blue);
}

function draw() {
    translate(width / 4, height / 1.9);
    push();
    //collatzRecursive(1, 0);
    collatzIterative();
    pop();
}

function collatzRecursive(number, diff) {
    if (number < 1) {
        return;
    }

    if (number > limit) {
        return;
    }

    rot_angle = diff * 10;
    rotate(rot_angle);
    setStroke(diff);

    diff = diff / compressRatio;
    line(0, 0, 0, diff);
    translate(0, diff);
    push();

    diff = number;
    next = number * 2;
    collatzRecursive(next, diff);

    if (number % 3 === 1) {
        diff = -(number * 2 + 1) / 3;
        next = (number - 1) / 3;
        collatzRecursive(next, diff);
    }

    pop();
}

function collatzIterative() {
    let numStack = [{
        "num": 1,
        "diff": 0,
        "index": 0
    }];
    let stateMap = new Map();
    let visited = new Map();
    let counter = 1;

    while (numStack.length > 0 && counter < 200) {
        let obj = numStack.pop();
        console.log(obj);
        let num = obj["num"];
        let index = obj["index"];
        let diff = obj["diff"];
        let willProceed = false;

        for (let i = index + 1; i < counter; i += 1) {
            if (typeof stateMap.get(i) == "boolean") {
                pop();
                stateMap.delete(i);
            } else {
                break;
            }
        }

        let rot_angle = diff * 10;
        rotate(rot_angle);
        setStroke(diff);

        diff = diff / compressRatio;
        line(0, 0, 0, diff);
        translate(0, diff);
        push();

        if (num * 2 < limit) {
            let nextNum = num * 2;
            if (typeof visited.get(nextNum) == "undefined") {
                visited.set(nextNum, true);
                let nextDiff = num;
                numStack.push({
                    "num": nextNum,
                    "diff": nextDiff,
                    "index": counter
                });
                counter += 1;
                willProceed = true;
            }
        }

        if (num % 3 == 1) {
            let nextNum = (num - 1) / 3;
            if (typeof visited.get(nextNum) == "undefined") {
                visited.set(nextNum, true);
                if (nextNum > 1 && nextNum < limit) {
                    let nextDiff = -(num * 2 + 1) / 3;
                    numStack.push({
                        "num": nextNum,
                        "diff": nextDiff,
                        "index": counter
                    });
                    counter += 1;
                    willProceed = true;
                }
            }
        }

        if (willProceed) {
            stateMap.set(index, true);
        } else {
            pop();
        }
    }
}