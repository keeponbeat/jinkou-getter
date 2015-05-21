var http = require('http');
var app = http.createServer();
var io = require('socket.io')(app).listen(process.env.PORT || 5000);
var async = require('async');

const basicURL = "http://api.e-stat.go.jp/rest/2.0/app/json/getStatsData?";
const APP_ID = process.env.APP_ID;
const lang = "J";

io.on('connection',function(socket){
    console.log('server bound');
    socket.on('request',function(data){
        setURL(data,function(year,maleURL,femaleURL){
            makeMaleData(year,maleURL,function(maleData){
                makeFemaleData(year,femaleURL,maleData,function(data){
                    socket.emit('return',{data:data});
				});
            }); //--end makeData()
        }); //--end setURL()
    });//--end socket.on('request')
}); //end io.on('connection')

function setURL(data,callback){
    var maleURL,femaleURL,statsDataId;
    switch(data.data){
            case 1991:
                    statsDataId = "0000150001";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1992:
                    statsDataId = "0000150020";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1993:
                    statsDataId = "0000150039";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1994:
                    statsDataId = "0000150060";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1996:
                    statsDataId = "0000150081";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1997:
                    statsDataId = "0000150102";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1998:
                    statsDataId = "0000150124";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 1999:
                    statsDataId = "0000150146";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 2001:
                    statsDataId = "0000150168";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 2002:
                    statsDataId = "0000150190";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 2003:
                    statsDataId = "0000150212";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 2004:
                    statsDataId = "0000150234";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 2006:
                    statsDataId = "0000150256";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat02=003";
                    break;
            case 2007:
                    statsDataId = "0003001514";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            case 2008:
                    statsDataId = "0003006715";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            case 2009:
                    statsDataId = "0003014707";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            case 2011:
                    statsDataId = "0003046396";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            case 2012:
                    statsDataId = "0003080162";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            case 2013:
                    statsDataId = "0003094384";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            case 2014:
                    statsDataId = "0003104181";
                    maleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=002";
                    femaleURL = basicURL+"appId="+APP_ID+"&lang="+lang+"&statsDataId="+statsDataId+"&metaGetFlg=N&cntGetFlg=N&cdCat01=003";
                    break;
            default:
                    break;
        } //--end switch
            callback(data.data,maleURL,femaleURL);
} //--end serURL(){}

function makeMaleData(year,maleURL,callback){

    var maleData = [];

        // get male Data
        http.get(maleURL,function(res){
        var body = ''
        res.setEncoding('utf-8');

        res.on('data',function(chunk){
            body += chunk;
        });

        res.on('end',function(res){
            async.waterfall([
                function(callback){
                    var json = JSON.parse(body);
                    callback(null,json);
                },function(json,callback){
                    switch(year){
                        case 1991:
                        case 1992:
                        case 1993:
                        case 1994:
                        case 1996:
                        case 1997:
                        case 1998:
                        case 1999:
                        case 2001:
                        case 2002:
                        case 2003:
                        case 2004:
                                    for(var i=0;i<=90;i++){
                                        maleData[i]=Number(json.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
                                    };
                                    break;
                        case 2006:
                        case 2007:
                        case 2008:
                        case 2009:
                        case 2010:
                        case 2011:
                        case 2012:
                        case 2013:
                        case 2014:
                                    for(var i=0;i<=101;i++){
                                        maleData[i]=Number(json.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
                                    };
                                    break;
                        default:
                                    break;
                    }
                    callback(null,maleData);
                }],function(err,results){
                    if(err) throw err;
                    callback(results);
                });
        });
    }).on('error',function(e){
        console.log(e.message);
    }); //--http.get getMaleData end
}


function makeFemaleData(year,femaleURL,maleData,callback){

    var femaleData = [];

        // get female Data
        http.get(femaleURL,function(res){
        var body = ''
        res.setEncoding('utf-8');

        res.on('data',function(chunk){
            body += chunk;
        });

        res.on('end',function(res){
            async.waterfall([
                function(callback){
                    var json = JSON.parse(body);
                    callback(null,json);
                },function(json,callback){
                    switch(year){
                        case 1991:
                        case 1992:
                        case 1993:
                        case 1994:
                        case 1996:
                        case 1997:
                        case 1998:
                        case 1999:
                        case 2001:
                        case 2002:
                        case 2003:
                        case 2004:
                                    for(var i=0;i<=90;i++){
                                        femaleData[i]=Number(json.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
                                    };
                                    break;
                        case 2006:
                        case 2007:
                        case 2008:
                        case 2009:
                        case 2010:
                        case 2011:
                        case 2012:
                        case 2013:
                        case 2014:
                                    for(var i=0;i<=101;i++){
                                        femaleData[i]=Number(json.GET_STATS_DATA.STATISTICAL_DATA.DATA_INF.VALUE[i].$);
                                    };
                                    break;
                        default:
                                    break;
                    }
                    callback(null,femaleData);
                },function(femaleData,callback){
                    var combinedData = {maleData:maleData,femaleData:femaleData};
                    callback(null,combinedData);
                }],function(err,results){
                    if(err) throw err;
                    callback(results);
                });
        });
    }).on('error',function(e){
        console.log(e.message);
    }); //--http.get getMaleData end
}