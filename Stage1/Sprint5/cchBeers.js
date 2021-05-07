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
function getBeer() {
    return __awaiter(this, void 0, void 0, function () {
        var apiString, theBeer, minAvg, maxAvg, minAvg, maxAvg, minAvg, maxAvg, response, jsonData, jsonLength, aBeer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    apiString = "https://api.punkapi.com/v2/beers";
                    theBeer = document.getElementById("myBeer").value;
                    if (theBeer == "4") {
                        //Random beer
                        //build the api string 
                        apiString = apiString + "/random";
                    }
                    if (theBeer == "1") {
                        minAvg = 0;
                        maxAvg = 4.0;
                        //build the api string 
                        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
                    }
                    if (theBeer == "2") {
                        minAvg = 4.1;
                        maxAvg = 6.0;
                        //build the api string 
                        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
                    }
                    if (theBeer == "3") {
                        minAvg = 6.1;
                        maxAvg = 16.0;
                        //build the api string 
                        apiString = apiString + "?abv_gt=" + minAvg + "&abv_lt=" + maxAvg;
                    }
                    return [4 /*yield*/, fetch(apiString)];
                case 1:
                    response = _a.sent();
                    // clear any previous responses
                    document.getElementById("myFormattedData1").innerHTML = ""; // clear previous responses
                    document.getElementById("myFormattedData2").innerHTML = ""; // clear previous responses
                    document.getElementById("myImage").src = "";
                    return [4 /*yield*/, response.json()];
                case 2:
                    jsonData = _a.sent();
                    jsonLength = jsonData.length;
                    aBeer = 0;
                    aBeer = Math.round(Math.random() * jsonLength);
                    if (theBeer == "4")
                        aBeer = 0;
                    document.getElementById("myFormattedData1").innerHTML += "<p>" + jsonData[aBeer].name + "<br><br>" + "Alcohol by Volume content : " + jsonData[aBeer].abv + "</p>";
                    document.getElementById("myFormattedData2").innerHTML += "<p>" + jsonData[aBeer].tagline + "<br><br>" + jsonData[aBeer].description + "<br><br>" + "</p>";
                    document.getElementById("myImage").src = jsonData[aBeer].image_url;
                    document.getElementById("myImage").style.width = "40%";
                    document.getElementById("myImage").style.height = "100%";
                    return [2 /*return*/, true];
            }
        });
    });
}
