var signupForm = [
    {
        "kind": "div",
        "style": "width: 328px;",
        "id": "box",
        "child": [
            {
                "kind": "form",
                "style": "margin: 5% auto 15% auto; width: 80%",
                "action": "",
                "method": "",
                "child": [
                    {
                        "kind": "div",
                        "style": "padding: 16px;",
                        "child": [
                            {
                                "kind": "h1",
                                "value": "SignUp",
                                "style": "margin: 10px; color: #e8c9e9"
                            },
                            {
                                "kind": "p",
                                "value": "Please fill in this form to create an acount",
                                "style": "margin: 10px; color: #cffbea"
                            },
                            {
                                "kind": "label",
                                "for": "FirstName",
                                "style": "float: left; color: #e8c9e9",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "FirstName:"
                                    }
                                ]
                            },
                            {
                                "kind": "input",
                                "id": "firstName",
                                "style": "width: 90%; padding: 10px; margin: 5px 0 22px 0; display: inline-block; border: none; background: #f1f1f1",
                                "name": "FirstName",
                                "type": "text"
                            },
                            {
                                "kind": "label",
                                "for": "LastName",
                                "style": "float: left; color: #e8c9e9",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "LastName:"
                                    }
                                ]
                            },
                            {
                                "kind": "input",
                                "id": "lastName",
                                "style": "width: 90%; padding: 10px; margin: 5px 0 22px 0; display: inline-block; border: none; background: #f1f1f1",
                                "name": "LastName",
                                "type": "text"
                            },
                            {
                                "kind": "label",
                                "for": "email",
                                "style": "float: left; color: #e8c9e9",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "Email:"
                                    }
                                ]
                            },
                            {
                                "kind": "input",
                                "id": "email",
                                "style": "width: 90%; padding: 10px; margin: 5px 0 22px 0; display: inline-block; border: none; background-color: #f1f1f1",
                                "name": "email",
                                "type": "email"
                            },
                            {
                                "kind": "label",
                                "for": "password",
                                "style": "float: left; color: #e8c9e9",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "Password:"
                                    }
                                ]
                            },
                            {
                                "kind": "input",
                                "id": "password",
                                "style": "width: 90%; padding: 10px; margin: 5px 0 22px 0; display: inline-block; border: none; background-color: #f1f1f1",
                                "name": "password",
                                "type": "password"
                            }
                        ]
                    },
                    {
                        "kind": "div",
                        "child": [
                            {
                                "kind": "button",
                                "id": "signupSubmit",
                                "style": "width: 60px; background-color: #cffbea; border-radius: 5px; padding: 5px",
                                "type": "submit",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "Submit"
                                    }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    }
]

var loginForm = [
    {
        "kind": "div",
        "style": "width: 328px;",
        "id": "box",
        "child": [
            {
                "kind": "form",
                "style": "margin: 5% auto 15% auto; width: 80%",
                "action": "",
                "method": "",
                "child": [
                    {
                        "kind": "div",
                        "style": "padding: 16px;",
                        "child": [
                            {
                                "kind": "h1",
                                "value": "SignIn",
                                "style": "margin: 10px; color: #e8c9e9"
                            },
                            {
                                "kind": "p",
                                "value": "Please fill in this form to create an acount",
                                "style": "margin: 10px; color: #cffbea"
                            },
                            {
                                "kind": "label",
                                "for": "email",
                                "style": "float: left; color: #e8c9e9",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "Email:"
                                    }
                                ]
                            },
                            {
                                "kind": "input",
                                "id": "loginEmail",
                                "style": "width: 90%; padding: 10px; margin: 5px 0 22px 0; display: inline-block; border: none; background-color: #f1f1f1",
                                "name": "email",
                                "type": "email"
                            },
                            {
                                "kind": "label",
                                "for": "password",
                                "style": "float: left; color: #e8c9e9",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "Password:"
                                    }
                                ]
                            },
                            {
                                "kind": "input",
                                "id": "loginPassword",
                                "style": "width: 90%; padding: 10px; margin: 5px 0 22px 0; display: inline-block; border: none; background-color: #f1f1f1",
                                "name": "password",
                                "type": "password"
                            }
                        ]
                    },
                    {
                        "kind": "div",
                        "child": [
                            {
                                "kind": "button",
                                "id": "loginSubmit",
                                "style": "width: 60px; background-color: #cffbea; border-radius: 5px;",
                                "type": "submit",
                                "child": [
                                    {
                                        "kind": "b",
                                        "value": "Submit"
                                    }
                                ]
                            }
                        ]
                    }

                ]
            }
        ]
    }
]

// import {data} from "./module.js";
// console.log(data);


var loginBtn = document.getElementById("loginBtn");

loginBtn.addEventListener('click', function loginAndSignup() {

    var signupBox = document.getElementById('signupBox');
    var loginBox = document.getElementById('loginBox');

    if (loginBox.style.display === "none") {
        loginBox.style.display = "block";
        signupBox.style.display = "none"
        loginBtn.innerHTML = "Sign Up"
    } else {
        loginBox.style.display = "none";
        signupBox.style.display = "block";
        loginBtn.innerHTML = "Sign In"
    }
})

let signupWithEmail = document.getElementById('signupWithEmail');
let signinWithEmail = document.getElementById('signinWithEmail');

signupWithEmail.addEventListener('click', (e) => {
    e.preventDefault()
    // alert('Signup triggered')
    modified = JSON.stringify(signupForm)
    JSONData = getdata(modified)
    if (JSONData != undefined) {
        document.getElementById('bigBox').style.display = "none"
        document.getElementById('container').innerHTML = JSONData;

        
        
        let submitBtn = document.getElementById('signupSubmit');
        submitBtn.addEventListener('click', (e) => {
            
            var firstName = document.getElementById('firstName').value;
            var lastName = document.getElementById('lastName').value;
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;
            
            var data = {
                "FirstName": firstName,
                "LastName": lastName,
                "Email": email,
                "Password": password
            }
            
            alert(firstName, "qwerty")
            alert('triggered')
            data = JSON.stringify(data);
            alert(data)
            e.preventDefault();
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('POST', 'https://script.google.com/macros/s/AKfycbz8oNRAug6Ar9J12ubmVOYihaQnFEIvnLM4DuN9WTibaAaQrBf9/exec?TypeOfRequest=signUpUser', false);
            xmlHttp.onload = (res) => {
                alert("done");
            };
            xmlHttp.send(data);
            alert(xmlHttp.responseText);
        })
    }
})

signinWithEmail.addEventListener('click', (e) => {
    e.preventDefault()
    // alert('Signup triggered')
    modified = JSON.stringify(loginForm)
    JSONData = getdata(modified)
    if (JSONData != undefined) {
        document.getElementById('bigBox').style.display = "none"
        document.getElementById('container').innerHTML = JSONData;

        let loginSubmit = document.getElementById('loginSubmit');

        loginSubmit.addEventListener('click', (e) => {

            let email = document.getElementById('loginEmail').value;
            let password = document.getElementById('loginPassword').value;

            var loginData = {
                "emailId": email,
                "password": password
            }

            alert("qwerty")
            data = JSON.stringify(loginData);
            alert(data)
            e.preventDefault();
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open('POST', 'https://script.google.com/macros/s/AKfycbz8oNRAug6Ar9J12ubmVOYihaQnFEIvnLM4DuN9WTibaAaQrBf9/exec?TypeOfRequest=loginUser', false);
            xmlHttp.onload = (res) => {
                alert("done");
            };
            xmlHttp.send(data);
            alert(xmlHttp.responseText);
        })
    }
})




// var container = document.getElementById('container');
// container.style.height = "230px"

// var ob1 = document.getElementById("transform").getAttribute("placeholder");
// console.log(typeof ob1);
function getdata(dataFromInput) {
    // const dataFromInput = document.getElementById('transform').value;
    if (dataFromInput !== "") {
        // var container = document.getElementById('container');
        // container.style.height = "auto"
        var modified = dataFromInput.replace(/'/g, "\"")

        if (modified.charAt(0) === "[") {
            modified = modified.substring(1, modified.length - 1);
        }
        // console.log(modified);
        var ob1 = JSON.parse(modified);
        // console.log(ob1);


        window.onerror = function (error, url, line) {
            console.log(error);
            var message = document.getElementById("err3");
            message.style.display = "block"
        };
        if (typeof ob1 == "object") {
            // console.log(typeof ob1, "ds");
            var html = json2html(ob1)
            return html
            // document.getElementById('container').innerHTML = html;
        }
        else {
            var message = document.getElementById("err1");
            message.style.display = "block"
        }
    }
    else {
        var message = document.getElementById("err2");
        message.style.display = "block"

    }
}

function oneEndTag(data, attribute) {

    return `<${data.kind} ${attribute}/>`;

}

function json2html(data) {
    let allSelfClosingTags = ["area", "base", "br", "col", "command", "embed", "hr", "menuitem", "meta", "param", "img", "input", "link", "source", "track", "wbr", "keygen",]
    const a = addAttributes(data)
    if (!data || !data.kind) {
        return "";
    } else if (allSelfClosingTags.includes(data.kind)) {
        oneEndTag(data, a)
    }
    const b = addChildren(data)
    if (data.value == undefined) {
        return `<${data.kind} ${a}>${b}</${data.kind}>`
    }
    console.log(`<${data.kind} ${a}>${b}</${data.kind}>`);
    return `<${data.kind} ${a}>${b}${data.value}</${data.kind}>`



}

function addAttributes(data) {
    var attributes = {};
    for (var key in data) {
        if (data.hasOwnProperty(key)) {
            if (key === "kind" || key === "child" || key === "value") {
                continue
            }
            // console.log(key + ':' + data[key]);
            attributes[key] = data[key]

        }
    }
    // console.log(attributes);
    // if (!data.attributes) {
    //     return "";
    // }
    let allAttrs = "";
    const attrs = Object.keys(attributes);
    // console.log(attrs);
    for (const value in attrs) {
        (allAttrs += `${attrs[value]}="${attributes[attrs[value]]}" `);
    }
    // console.log(allAttrs);
    return allAttrs;
}

function addChildren(data) {
    if (!data.child) {
        return "";
    }
    else {
        let tag = "";
        for (const child in data.child) {
            if ("object" == typeof data.child[child]) {
                tag += json2html(data.child[child])
            }
            else {
                tag += data.child[child]
            }
        }
        return tag
    }
}


