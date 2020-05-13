const AWS = require("aws-sdk");

const credentials = new AWS.SharedIniFileCredentials({ profile: "default" });
AWS.config.credentials = credentials;

var iam = new AWS.IAM({ apiVersion: "2010-05-08" });

var params = {
  UserName: "MaudyAyunda",
};

iam.createUser(params, function (err, data) {
  if (err) console.log(err, err.stack);
  // an error occurred
  else console.log(data); // successful response
});
