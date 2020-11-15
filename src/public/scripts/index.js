async function getForecastWeather(){
    path = '/api/weather/forecast/';
    if(document.getElementById("id").value!=""){
        path += document.getElementById("id").value;
    }
    promise = await httpGet(path)
    json = await promise.json()
    document.getElementById("apioutput").innerHTML = JSON.stringify(json)
}

async function postForecastWeather(){
    path = "/api/weather/forecast/"
    if(document.getElementById("id").value!=""){
        alert("DO NOT Specify id")
        return
    }
    data = {
        //do not specify id when you do post
        "year" : parseInt(document.getElementById("year").value),
        "month" : parseInt(document.getElementById("month").value),
        "day" :parseInt(document.getElementById("day").value),
        "hour" : parseInt(document.getElementById("hour").value),
        "minute" : parseInt(document.getElementById("minute").value),
        "place_id"  : parseInt(document.getElementById("place_id").value),
        "rainfall" : parseInt(document.getElementById("rainfall").value)
    }
    promise = await httpPost(path, data)
    json = await promise.json()
    document.getElementById("apioutput").innerHTML = JSON.stringify(json)
}

async function patchForecastWeather(){
    path = "/api/weather/forecast/"
    data = {}
    if(document.getElementById("id").value==""){
        alert("Please Specify id")
        return
    }
    path += document.getElementById("id").value;
    if(document.getElementById("year").value!=""){
        data.year = parseInt(document.getElementById("year").value)
    }
    if(document.getElementById("month").value!=""){
        data.month = parseInt(document.getElementById("month").value)
    }
    if(document.getElementById("day").value!=""){
        data.day = parseInt(document.getElementById("day").value)
    }
    if(document.getElementById("hour").value!=""){
        data.hour = parseInt(document.getElementById("hour").value)
    }
    if(document.getElementById("minute").value!=""){
        data.minute = parseInt(document.getElementById("minute").value)
    }
    if(document.getElementById("place_id").value!=""){
        data.place_id = parseInt(document.getElementById("place_id").value)
    }
    if(document.getElementById("rainfall").value!=""){
        data.rainfall = parseInt(document.getElementById("rainfall").value)
    }
    promise = await httpPatch(path, data)
    json = await promise.json()
    document.getElementById("apioutput").innerHTML = JSON.stringify(json)
}

async function deleteForecastWeather(){
    if(document.getElementById("id").value==""){
        alert("Please Specify id")
        return
    }
    path = '/api/weather/forecast/' + document.getElementById("id").value;
    promise = await httpDelete(path)
    json = await promise.json()
    document.getElementById("apioutput").innerHTML = JSON.stringify(json)
}

function httpGet(path) {
    console.log("httpGet")
    return fetch(path, getOptions('GET'))
}

function httpPost(path, data) {
    console.log("httpPost")
    return fetch(path, getOptions('POST', data));
}

function httpPatch(path, data) {
    return fetch(path, getOptions('PATCH', data));
}


function httpDelete(path) {
    return fetch(path, getOptions('DELETE'));
}


function getOptions(verb, data) {
    var options = {
        dataType: 'json',
        method: verb,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    if (data) {
        options.body = JSON.stringify(data);
    }
    return options;
}

