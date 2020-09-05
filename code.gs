var ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1tnrJQHhuPTdv7iI03_vJtsveVXd0R8ZVeddoGhUyl-I/edit#gid=0");
var sheet = ss.getSheetByName("Sheet1");


var SHEET_ID = ("1tnrJQHhuPTdv7iI03_vJtsveVXd0R8ZVeddoGhUyl-I");
function readData() {
  var sheet = SpreadsheetApp.openById(SHEET_ID);
  var data = sheet.getDataRange().getValues();
  console.log(data, 'data');
  for (var i = 0; i < data.length; i++) {
    Logger.log('Id: '+ data[i][0])
    Logger.log('FirstName: ' + data[i][1]);
    Logger.log('LastName: ' + data[i][2]);
    Logger.log('Email' + data[i][3]);
    Logger.log('Password' + data[i][4]);

  }
}


// Get data
function getData() {
  var sheet = SpreadsheetApp.openById(SHEET_ID);
  var dataRange = sheet.getDataRange();
  var values = dataRange.getValues();
//  console.log(values);
  return values;
}

//doGet
function doGet(e) {
  var requestType = (e.parameter.TypeOfRequest);
  if (requestType == "getUserDetails") {
    return getUserDetails(e);
  }
}

function getUserDetails(e){
  var dataArray = [];
  var rows = sheet.getRange(2,1,sheet.getLastRow()-1, sheet.getLastColumn()).getValues();
  
  for (var i = 0, l= rows.length; i<l; i++){
    var dataRow = rows[i];

    var record = {
      "Id": dataRow[0],
      "FirstName": dataRow[1],
      "LastName": dataRow[2],
      "Email": dataRow[3],
      "Password": dataRow[4]
    }
    
    dataArray.push(record);
  }
//  console.log(dataArray, "data");
  var result = JSON.stringify(dataArray);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}


// Signup New User
function signUpUser(e) {  
  var sheet = SpreadsheetApp.openById(SHEET_ID);
  var data = sheet.getDataRange().getValues();
  if(e.postData !== undefined){
//  Logger.log(e.postData);
  var params = JSON.stringify(JSON.parse(e.postData.contents));
  var parseData = JSON.parse(e.postData.contents);
//  sheet.appendRow([parseData.Id, parseData.Name, parseData.Number]);
    
    for (var i in data){
      var row = data[i];
      var duplicate = false;
      if (parseData.Id == data[i][0]){
        duplicate = true;
        return ContentService.createTextOutput("Id is duplicate!").setMimeType(ContentService.MimeType.JSON);
      }
    }
    if (!duplicate){
        sheet.appendRow([parseData.Id, parseData.FirstName, parseData.LastName, parseData.Email, parseData.Password]);
        return ContentService.createTextOutput("sucessfully signup account !").setMimeType(ContentService.MimeType.JSON);
      }
        
  }else{
    var warning = {"Warning!": "Please enter valid details"};
    var error = JSON.stringify(warning)
    return ContentService.createTextOutput(error).setMimeType(ContentService.MimeType.JSON);
  }
}

function doPost(e){
  var requestType = (e.parameter.TypeOfRequest);
  if (requestType == "updateUserInformation") {
    return updateUserInformation(e);
  }
  if (requestType == "signUpUser") {
    return signUpUser(e);
  }
  if (requestType == "loginUser"){
    return loginUser(e);
  }
}

//getRange and setValues for User details (update)
function updateUserInformation(e){
  var sheet = SpreadsheetApp.openById(SHEET_ID);
  var asheet= sheet.getActiveSheet();
  var dataRange = sheet.getDataRange().getValues();
  if(e.postData !== undefined){
  var params = JSON.stringify(JSON.parse(e.postData.contents));
  var parseData = JSON.parse(e.postData.contents);
    for ( var i=0; i<dataRange.length; i++){
      if (dataRange[i][0] == parseData.Id){
        var B = 'B'+ (i+1);
        var range= sheet.getRange(B)
        var sv= range.setValue([parseData.FirstName]);
      
        var C = 'C'+ (i+1);
        var range= sheet.getRange(C)
        var sv= range.setValue([parseData.LastName]);
        
        var D = 'D'+ (i+1);
        var range= sheet.getRange(D)
        var sv= range.setValue([parseData.Email]);
        
        var E = 'E'+ (i+1);
        var range= sheet.getRange(E)
        var sv= range.setValue([parseData.Password]);
        
      } 
    }
    return ContentService.createTextOutput("data updated!").setMimeType(ContentService.MimeType.JSON);
    
  }else{
    var warning = {"Warning!": "Please enter valid details !"};
    var error = JSON.stringify(warning)
    return ContentService.createTextOutput(error).setMimeType(ContentService.MimeType.JSON);
   
  }
}

function loginUser(e){
  var jsonData = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.openById(SHEET_ID);
  var data = sheet.getDataRange().getValues();
//  var email_id = "vishal19@navgurukul.org";
//  var password = "123W";
  var email_id = jsonData['emailId'];
  var password = jsonData['password'];
  
  for(var i=1; i<data.length; i++){    
    if(data[i][3] === email_id){
      if(data[i][4] === password)
        msg = "you can go in login !";
      else
        msg = "your password is wrong";
      break;
    }  
  }
  if(i == data.length){
    msg = "you should register first!";
  }
  
  var response = {'status': 0, 'msg': msg, 'data': ''};
  var result = JSON.stringify(response);
  return ContentService.createTextOutput(result).setMimeType(ContentService.MimeType.JSON);
}



