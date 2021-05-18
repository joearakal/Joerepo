var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var myjson;
loadEvents();
function loadEvents() {
    document.querySelector('.myListUl').addEventListener('click', pickedItem);
    document.getElementById("purchase").addEventListener('click', clearNPurchase);
    // clear any previous responses
    document.getElementById("myData1").innerHTML = ""; // clear previous responses
    document.getElementById("myData2").innerHTML = ""; // clear previous responses
    document.getElementById("myImage").innerHTML = ""; // clear previous beer image
    document.getElementById("myImage").src = "";
}
function getBeers() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            getApiData();
            return [2 /*return*/];
        });
    });
}
function getApiData() {
    return __awaiter(this, void 0, void 0, function () {
        var apiString, theBeerType, minAbv, maxAbv, minAbv, maxAbv, minAbv, maxAbv, response, jsonData, jsonLength, listItem, aBeer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiString = "https://api.punkapi.com/v2/beers";
                    theBeerType = document.getElementById("beerType").value;
                    if (theBeerType == "1") {
                        //Random beer
                        //build the api string 
                        apiString = apiString + "/random";
                    }
                    if (theBeerType == "2") {
                        minAbv = 0;
                        maxAbv = 4.0;
                        //build the api string 
                        apiString = apiString + "?abv_gt=" + minAbv + "&abv_lt=" + maxAbv;
                    }
                    if (theBeerType == "3") {
                        minAbv = 4.1;
                        maxAbv = 6.0;
                        //build the api string 
                        apiString = apiString + "?abv_gt=" + minAbv + "&abv_lt=" + maxAbv;
                    }
                    if (theBeerType == "4") {
                        minAbv = 6.1;
                        maxAbv = 16.0;
                        //build the api string 
                        apiString = apiString + "?abv_gt=" + minAbv + "&abv_lt=" + maxAbv;
                    }
                    return [4 /*yield*/, fetch(apiString)];
                case 1:
                    response = _a.sent();
                    // clear any previous responses
                    document.getElementById("myData1").innerHTML = ""; // clear previous responses
                    document.getElementById("myData2").innerHTML = ""; // clear previous responses
                    document.getElementById("myImage").innerHTML = ""; // clear previous beer image
                    document.getElementById("myImage").src = "";
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    // clear previous list
                    document.querySelector('.myListUl').innerHTML = "";
                    myjson = jsonData;
                    jsonLength = jsonData.length;
                    for (aBeer = 0; (aBeer < 15 && aBeer < jsonLength); aBeer++) {
                        listItem = jsonData[aBeer].name;
                        addList1(listItem);
                    }
                    // Add Event listener
                    document.querySelector('.myListUl').addEventListener('click', pickedItem);
                    //   alert(JSON.stringify(jsonData));
                    return [2 /*return*/, true];
            }
        });
    });
}
function addList1(listItem) {
    var myUl = document.querySelector('.myListUl');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(listItem));
    myUl.appendChild(li);
    document.querySelector('.myList').style.display = 'block';
    //Create Info Button
    var infoButton = document.createElement("Button");
    infoButton.appendChild(document.createTextNode("More Info"));
    li.appendChild(infoButton);
    infoButton.style.float = "right";
    infoButton.style.backgroundColor = "darkblue";
    infoButton.style.color = "whitesmoke";
    infoButton.addEventListener("click", getInfo);
}
function getInfo(evnt) {
    var task = evnt.target.parentNode;
    var taskValue = task.textContent;
    taskValue = taskValue.replace("More Info", "");
    var jsonLength = myjson.length;
    var itemId;
    for (itemId = 0; itemId < jsonLength; itemId++) {
        if (myjson[itemId].name == taskValue) {
            // clear any previous responses
            document.getElementById("myData1").innerHTML = ""; // clear previous responses
            document.getElementById("myData2").innerHTML = ""; // clear previous responses
            document.getElementById("myImage").innerHTML = ""; // clear previous beer image
            document.getElementById("myImage").src = "";
            //Display info for the matched item
            document.getElementById("myData1").innerHTML += "<p>" + myjson[itemId].name + "<br><br>" + "Alcohol by Volume content : " + myjson[itemId].abv +
                "<br><br>" + myjson[itemId].tagline + "<br><br>" + myjson[itemId].description + "<br><br>" + "</p>";
            document.getElementById("myImage").src = myjson[itemId].image_url;
            document.getElementById("myImage").style.width = "10%";
            document.getElementById("myImage").style.height = "85%";
        }
    }
}
function pickedItem(evnt) {
    var task = evnt.target;
    task.style.backgroundColor = "cyan";
    var taskValue = task.textContent;
    taskValue = taskValue.replace("More Info", "");
    if (taskValue) {
        purchList(taskValue);
    }
}
function purchList(beerName) {
    var myUl = document.querySelector('.myBuyUl');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(beerName));
    myUl.appendChild(li);
    document.querySelector('.myBuyList').style.display = 'block';
}
function clearNPurchase(e) {
    document.querySelector(".myList").innerHTML = "";
    var purchNum = (document.getElementById("buyUl").getElementsByTagName('li')).length;
    document.getElementById("buyMessage").innerHTML = "<p>" + "Number of items purchased: " + purchNum + "</p>";
    return;
}
