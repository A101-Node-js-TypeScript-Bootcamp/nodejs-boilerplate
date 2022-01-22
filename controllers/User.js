const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');
const AWS = require('aws-sdk');
AWS.config.update({
    region: "us-east-1",
    accessKeyId: "AKIA3WPQL7AEJPF3AYUQ",
    secretAccessKey: "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",
    endpoint: "https://dynamodb.us-east-1.amazonaws.com"
});
let docClient = new AWS.DynamoDB.DocumentClient();
var table = "users";
exports.fetchUser = async (req,res) => {
    var params = {
        TableName: table,
        Key:{
            "email": "berkay.oflaz@gmail.com"
        }
    };
    docClient.get(params, function(err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
        }
    });
    res.status(200).send({})
}
exports.addUser = (req,res) => {
    if(req.body.username.length < 4){
        let response = {
            status: false,
            message: 'Username 4 karakterden fazla olmali.'
        }
        res.status(200).send(response)
    }else{
        let response = {
            status: true,
            message: 'İşleminiz gerçekleşti.'
        }
        res.status(200).send(response)
    }
    
}
exports.put = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.fetchDelete = (req,res) => {
    let response = {
        status: true
    }
    res.status(200).send(response)
}
exports.register = (req,res) => {
    
}
exports.login = (req,res)=> {

    /*if(req.body.email === 'berkay.oflaz@gmail.com' &&  req.body.password === 'berkay123'){
        const secret  = "62cb5757449177f69896654ee30d330a";
        const user = {
            id: 2,
            name: 'Berkay',
            surname: 'Oflaz',
            email: 'berkay.oflaz@gmail.com',
            role: 1,
            user_type : 'admin'
        }
        const token = jwt.sign(
            user,
            secret,
            { expiresIn: '7d' }
        );
        res.send( {
            status: true,
            jwt : {
                token:token,
                expiresIn: '7d'

            },
            user
        });
    }else{
        let response = {
            status: false
        }
        res.status(200).send(response)
    }*/
    
}