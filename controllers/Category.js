const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIA3WPQL7AEFYJ3CIJJ",
    secretAccessKey: "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",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "category";

exports.add = (req,res) => {
    var categoryName = "Oyuncak";

    var params = {
        TableName:table,
        Item:{
            "id":uuidv4(),
            "categoryName": categoryName
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false,message: 'sorun var'})
        } else {
            console.log("Added item:", JSON.stringify(data, null, 2));
            res.send({status:true,message: 'eklendi'})
        }
    });
}
exports.fetchAll = (req,res) => {
    var params = {
        TableName: table, // give it your table name 
        Select: "ALL_ATTRIBUTES"
      };
    
      docClient.scan(params, function(err, data) {
        if (err) {
           console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
           console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
      });
}

exports.update = (req,res) => {
    var params = {
        TableName:table,
        Key:{
            "id": req.body.id
        },
        UpdateExpression: "set categoryName = :categoryName",
        ExpressionAttributeValues:{
            ":categoryName":req.body.categoryName
        },
        ReturnValues:"UPDATED_NEW"
    };
    
    console.log("Updating the item...");
    docClient.update(params, function(err, data) {
        if (err) {
            console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false})
        } else {
            console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true})
        }
    });
}
exports.delete = (req,res) => {
    var params = {
        TableName:table,
        Key:{
            "id": req.params.id
        }
    };
    
    console.log("Attempting a conditional delete...");
    docClient.delete(params, function(err, data) {
        if (err) {
            console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
            res.send({status:false})
        } else {
            console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
            res.send({status:true})
        }
    });
}