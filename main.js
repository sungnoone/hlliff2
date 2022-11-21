const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('.\\ssl\\private.pem', 'utf-8');
const certificate = fs.readFileSync('.\\ssl\\certificate.pem', 'utf-8');
const cafile = fs.readFileSync('.\\ssl\\ca_bundle.pem', 'utf-8');
const credential = {ca:cafile, key: privateKey, cert:certificate};

const express = require('express');
const session = require('express-session');
const { type } = require('os');
const middleware = require('@line/bot-sdk').middleware;
const app = express();

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credential, app);

// create LINE SDK config from env variables
const config ={
    channelAccessToken: 'b1Yh/hY/+BhjuPmtveyHAOxbqrlaAtMivnUvWECpOXa5jHjvh84Bc7r5mg1K88HQXMubFMCjX6VDIVzPyBbSZcBHYkXIODFAOqvRnm6z2PryrkEuif9xhX+n4z1bUClJrF7eMQjvQkyXwuX2yywCgAdB04t89/1O/w1cDnyilFU=',
    channelSecret: 'ceb3083df43021d4c31791afe5af6953'
};

// create LINE SDK client
const Client = require('@line/bot-sdk').Client;
const client = new Client(config);

app.use(session({
    secret: 'wenjen',
    saveUninitialized: false,
    resave: true,
}));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/webhook', middleware(config), (req, res)=>{
    console.log('Webhook try connecting.');
    Promise
        .all(req.body.events.map(handleEvent))
        .then((result) => {
            console.log(req.body.events);
            res.json(result);            
        }).catch((err) => {
            //console.error(err);
            res.status(500).end;
        });
});

//event handler
function handleEvent(event){
    if(event.type !== 'message' && event.type !== 'text'){
        //ignore noe-text message event
        console.log("event.type: " + event.type);
        return Promise.resolve(null);
    }

    //create echo text message
    const echo = {type:'text', text:event.message.text};
    //use reply api
    return client.replyMessage(event.replyToken, echo);

};

app.use(express.static('public'));
app.use(express.static('web'));

app.get('/', function(req, res){
    console.log('connected.');
    res.send('Hello Hanlin!!');
});

app.get('/home', function(req, res){
    console.log('Browser Barcode Reader Home');
    res.sendFile(__dirname + "/web/home.html");
});


//for liff web url
app.get('/liff', function(req, res){
    console.log('Liff載入網頁');
    //console.log(req);
    //res.send('LIFF 測試網頁成功');
    res.sendFile(__dirname + "/web/orderscan.html");
});

//Dynamsoft測試範例 - 單碼掃描 
app.get('/dyn', function(req, res){
    console.log('Dynamsoft測試範例 - 單碼掃描');
    res.sendFile(__dirname + "/web/dynamsoft.html");
});

//Dynamsoft測試範例 - 矩陣掃描
app.get('/dyn2', function(req, res){
    console.log('Dynamsoft測試範例 - 矩陣掃描');
    res.sendFile(__dirname + "/web/dynamsoft2.html");
});

//Dynamsoft測試範例 - 重複記憶區間
app.get('/dyn3', function(req, res){
    console.log('Dynamsoft測試範例 - 重複記憶區間');
    res.sendFile(__dirname + "/web/dyn3.html");
});

//Dynamsoft測試範例 - 停用GPU
app.get('/dyn4', function(req, res){
    console.log('Dynamsoft測試範例 - 停用GPU');
    res.sendFile(__dirname + "/web/dyn4.html");
});

//Dynamsoft測試範例 - 條碼計數
app.get('/dyn5', function(req, res){
    console.log('Dynamsoft測試範例 - 矩陣掃描+計數');
    res.sendFile(__dirname + "/web/dyn5.html");
});

//Dynamsoft測試範例 - 製通單結案
app.get('/dyn6', function(req, res){
    console.log('Dynamsoft測試範例 - 製通單結案');
    res.sendFile(__dirname + "/web/dyn6.html");
});

//Scandit 
app.get('/scandit', function(req, res){
    console.log('Scandit Barcode Reader testing sample');
    res.sendFile(__dirname + "/web/scandit.html");
});

//Scandit 
app.get('/scandit2', function(req, res){
    console.log('Scandit2 Barcode Reader testing sample');
    res.sendFile(__dirname + "/web/scandit2.html");
});

//Scandit 
app.get('/scandit3', function(req, res){
    console.log('Scandit3 Barcode Reader testing sample');
    console.log(req.session);
    console.log(req.sessionID);
    res.sendFile(__dirname + "/web/scandit3.html");
});

//Cognex
app.get('/cognex1', function(req, res){
    console.log('Cognex Barcode Reader testing sample');
    console.log(req.session);
    console.log(req.sessionID);
    res.sendFile(__dirname + "/web/cognex1.html");
});

//Cognex
app.get('/cognex2', function(req, res){
    console.log('Cognex Barcode Reader testing sample');
    console.log(req.session);
    console.log(req.sessionID);
    res.sendFile(__dirname + "/web/cognex2.html");
});

//Html5Qrcode
app.get('/html5qrcode1', function(req, res){
    console.log('html5qrcode1 Barcode Reader testing sample');
    console.log(req.session);
    console.log(req.sessionID);
    res.sendFile(__dirname + "/web/html5qrcode1.html");
});

// Query by barcode
app.post('/codequery', (req, res, next) =>{
    //let barcode = req.body.param1;
    console.log("codequery running");
    console.log(req.body.CodeContent);
    let resData = {
        BookName:"中國文化基本教材",
        BookCode:"123465798",
        BookPrice:"NT$125",
    };
    res.send(JSON.stringify(resData));
});

var { Pool } = require('pg');
const pgPool_production_order = new Pool({
    user: 'hluser2',
    host: '192.168.53.247',
    database: 'pd',
    password: 'tracker69382361',
    port: 5432,
    max: 300,
});
async function queryByBarcode(barcode, code){
    console.log("async function");
    let result;
    const production_order_queryStr  = 'SELECT * FROM public.production_order WHERE "production_form_no"=$1';
    try{
        // await pgPool_production_order.query(production_order_queryStr,[barcode], (err, quertResult)=>{
        //     console.log("Query.....");
        //     if(err){
        //         return console.log('Error excuting query: ', err.stack);
        //     }
        //     console.log(quertResult.rowCount);
        //     return quertResult;
        // });
        result = await pgPool_production_order.query(production_order_queryStr,[barcode]);
        return result;        
    }catch(error){
        console.log("Error query: " + error);
        return "";
    }
}

//generate content of html code
const createHTML = require('create-html');
async function CreateHtml(CONTENT_JSON_DATA){
    //const objArray = JSON.parse(CONTENT_JSON_DATA);
    let list_html = CONTENT_JSON_DATA.length;
    console.log("list_html:" + CONTENT_JSON_DATA.length);
    //loop for content to html list
    let htmlCode_list = "<ul>";
    for(let i=0; i<CONTENT_JSON_DATA.length; i++){
        console.log(CONTENT_JSON_DATA[0]);
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['state'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['finish_date'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['mfr_name'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['production_form_no'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['publish_no'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['product_no'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['product_name'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['production_part_name'] + "</li>";
        htmlCode_list += "<li>" + CONTENT_JSON_DATA[0]['step_name'] + "</li>";
    };
    htmlCode_list += "</ul>";

    let html = createHTML({
        title:'製通單完工結案',
        body:`<div class="container">
        <p>` 
        + htmlCode_list + 
        `</p>
        </div>`,
        css:['/bootstrap/dist/css/bootstrap.min.css'],
        script:['/bootstrap/dist/js/bootstrap.bundle.min.js']
    });
    await fs.writeFileSync(__dirname + '/web/detail.html', html, function(err){
        if(err){
            console.log("Create Html fail: " + err);
        }
    });
}

//production order
app.get('/product/:barcode?/:code?', function(req, res){
    //get barcode text
    let barcode_text = req.params.barcode;    
    let code = req.params.code;
    console.log("barcode_text: " + barcode_text);
    queryByBarcode('21110801806', code)
    .then(data =>{
        console.log("row count:" + data.rowCount);
        //json data that will show on html
        let json_data = [];
        for(let row_no=0; row_no<data.rowCount; row_no++){
            try{
                //console.log(data.rows[0]['product_name']);
                let row_json = {
                    "state":data.rows[row_no]['state'],
                    "finish_date":data.rows[row_no]['finish_date'],
                    "mfr_name":data.rows[row_no]['mfr_name'],
                    "production_form_no":data.rows[row_no]['production_form_no'],
                    "publish_no":data.rows[row_no]['publish_no'],
                    "product_no":data.rows[row_no]['product_no'],
                    "product_name":data.rows[row_no]['product_name'],
                    "production_part_name":data.rows[row_no]['production_part_name'],
                    "step_name":data.rows[row_no]['step_name']
                };
                json_data.push(row_json);
            }catch(parseRowDataError){
                console.log("Parsing row data error: " + parseRowDataError);
            }            
        }
        CreateHtml(json_data);//to generate html code
     }).then(function(){
        res.writeHead(200, { 'Content-Type':'text/html'});
        html = fs.readFileSync(__dirname + '/web/detail.html');
        res.end(html);
     }).catch(err=>{
        console.log(err);
     });
    
});


httpServer.listen(80);
httpsServer.listen(443);