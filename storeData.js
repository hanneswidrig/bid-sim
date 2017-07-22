var interval = 0;
var currentPrice = 0;
// var currentLeader = 0;
var bidderId = 0;
var bidTotal = 0;
var price = 0;
var bidLeader = 0;
var time = new Date().toLocaleTimeString();
var userArray = [];
var bidDisplay = new BidDisplay(0,0,time);

function inProgressAlert() {
    alert("Currently In Progress, if you want to try it out, start clicking on the Bidder Buttons.");
}

function init() {
    fillTA();
    interval = setInterval("startTime();", 1000);
}

function BidDisplay(price, bidLeader, time) {
    this.price = price;
    this.bidLeader = bidLeader;
    this.time = time;
}

function User(bidderId, bidTotal) {
    this.bidderId = bidderId;
    this.bidTotal = bidTotal;
}

function fillTA() {
    var textarea = document.getElementById("qta");
    textarea.innerHTML = "Current Price: " + bidDisplay.price.valueOf() + "\n" +
        "Bid Leader: " + bidDisplay.bidLeader.valueOf() + "\n" + "Last Bid Time: " + new Date().toLocaleTimeString();
}

function fillResultTA() {
    var textarea = document.getElementById("fta");
    var arrayLength = 0;
    if(textarea.innerHTML.value !== "") {
        textarea.innerHTML = "";
    }
    if(userArray.length.valueOf() < 3) {
        arrayLength = userArray.length.valueOf();
    }
    else {
        arrayLength = 3;
    }
    for(var i = 0; i < arrayLength; i++) {
        textarea.innerHTML += "Bidder " + userArray[i].bidderId.valueOf() + " with " + userArray[i].bidTotal.valueOf() + " Bids" + "\n";
    }
}

function flashUpdateTextarea() {
    var textarea = document.getElementById("qta");
    textarea.style.animation = "flash 1000ms";
    setTimeout(function() {
        textarea.style.animation = "none";
    }, 500);
}

function startTime() {
    document.getElementById('timeLabel').innerHTML = new Date().toLocaleTimeString();
}

function findUser(bidder) {
    var found = -1;
    for(var i = 0; i < userArray.length; i++) {
        if(userArray[i].bidderId === bidder) {
            found = i;
        }
    }
    return found;
}

function bidder1() {
    currentPrice++;
    bidDisplay.bidLeader = 1;
    bidDisplay.price = currentPrice.valueOf();
    fillTA();
    flashUpdateTextarea();
    var userIndex = findUser(bidDisplay.bidLeader);

    if(userIndex.valueOf() === -1) {
        var user = new User(bidDisplay.bidLeader,1);
        userArray.push(user);
    }
    else {
        userArray[userIndex.valueOf()].bidTotal++;
    }
}

function bidder2() {
    currentPrice++;
    bidDisplay.bidLeader = 2;
    bidDisplay.price = currentPrice.valueOf();
    fillTA();
    flashUpdateTextarea();

    var userIndex = findUser(bidDisplay.bidLeader);

    if(userIndex.valueOf() === -1) {
        var user = new User(bidDisplay.bidLeader,1);
        userArray.push(user);
    }
    else {
        userArray[userIndex.valueOf()].bidTotal++;
    }
}

function bidder3() {
    currentPrice++;
    bidDisplay.bidLeader = 3;
    bidDisplay.price = currentPrice.valueOf();
    fillTA();
    flashUpdateTextarea();

    var userIndex = findUser(bidDisplay.bidLeader);

    if(userIndex.valueOf() === -1) {
        var user = new User(bidDisplay.bidLeader,1);
        userArray.push(user);
    }
    else {
        userArray[userIndex.valueOf()].bidTotal++;
    }
}

function bidder4() {
    currentPrice++;
    bidDisplay.bidLeader = 4;
    bidDisplay.price = currentPrice.valueOf();
    fillTA();
    flashUpdateTextarea();

    var userIndex = findUser(bidDisplay.bidLeader);

    if(userIndex.valueOf() === -1) {
        var user = new User(bidDisplay.bidLeader,1);
        userArray.push(user);
    }
    else {
        userArray[userIndex.valueOf()].bidTotal++;
    }
}

function bidder5() {
    currentPrice++;
    bidDisplay.bidLeader = 5;
    bidDisplay.price = currentPrice.valueOf();
    fillTA();
    flashUpdateTextarea();

    var userIndex = findUser(bidDisplay.bidLeader);

    if(userIndex.valueOf() === -1) {
        var user = new User(bidDisplay.bidLeader,1);
        userArray.push(user);
    }
    else {
        userArray[userIndex.valueOf()].bidTotal++;
    }
}

function compare(a, b) {
    return parseInt(b.bidTotal) - parseInt(a.bidTotal);
}

function endAuction() {
    userArray.sort(compare);
    if(userArray.length !== 0) {
        document.getElementById("final-textarea").style.display = "block";
        console.log("Winner is Bidder " + userArray[0].bidderId.valueOf());
    }
    fillResultTA();
}

function resetAuction() {
    userArray = [];
    currentPrice = 0;
    bidDisplay.bidLeader = 0;
    bidDisplay.price = 0;
    bidDisplay.time = new Date().toLocaleTimeString();
    fillTA();
    document.getElementById("final-textarea").style.display = "none";
}
