[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/kCrKdl4V)
# ExplorationActivity2


**Which package/library does the sample program demonstrate?**
<br> Express.js <br> *NEW* in v2.0 AWS-SDK for AWS SES Email Service

**How does someone run your program?** <br>
You can run my program as a webapp or test the API functionality via postman
##### setup (webapp)

- pull the code from this repo
- cd into the src folder in the terminal
- start the express server via the "node server" command in the terminal (make sure you're cd'd in correctly)
- start a local server for index.html page viewing (vscode has 'live server' available as an extension)
- open the html page and encrypt/decrypt away!
- to export encrypted text via email, simply type your email in the email field, and click send email. (CHECK SPAM FOLDER!)

##### setup (postman)

- pull the code from this repo
- cd into the src folder in the terminal
- start the express server via the "node server" command in the terminal (make sure you're cd'd in correctly)

###### Encrypting
- set the postman method to POST
- set the postman URL to http://localhost:3000/encrypt
- set the body to raw json format
- input the following in the json body: "text": "string" (replace string with whatever you want to encrypt)
- click send!

###### Decrypting
- set the postman method to POST
- set the postman URL to http://localhost:3000/decrypt
- set the body to raw json format
- input the following in the json body: "text": "string" (replace string with encrypted text)

###### Export Encrypted Text via Email (NEW IN V2.0)
- set the postman method to POST
- set the postman URL to http://localhost:3000/decrypt
- set the body to raw json format
- input the following in the json body: "text": "string" (replace string with encrypted text)


