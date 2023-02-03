const propertyModel= require("../model/propertyModel")
/////********************************************************Redis Connection************************************************* */
const redis = require('redis')
const { promisify } = require("util");
const client= redis.createClient({
  host: 'redis-11716.c44.us-east-1-2.ec2.cloud.redislabs.com',
  port: 11716,
  password: '181cOUq3YRvFLDhbxHwxtOlIBQA4NYiA'
});

client.on('error',function (error){
  console.error('error found',error);
})
client.on('connect',function(error){
  console.log('redis connection established');
})
console.log(client,'redis connected');


// //Connection setup for redis

const SET_ASYNC = promisify(client.SET).bind(client);
const GET_ASYNC = promisify(client.GET).bind(client);

