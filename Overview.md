<h1>ExpressJS Package Exploration</h1> 
<h3>Text encryptor API</h3>

**What is the package/library?** <br>
AWS-SDK is an npm package that allows you to use AWS tools within your app

**What purpose does it serve?**<br>
AWS is designed to allow application providers, developers, ISVs, and vendors to quickly and securely build, improve, and host applications
<a href = "https://aws.amazon.com/application-hosting/benefits/#:~:text=AWS%20is%20designed%20to%20allow,access%20AWS%27s%20application%20hosting%20platform">[Reference #1]</a>


**How do you use it?**<br>
Install AWS-SDK using the following command

```npm install aws-sdk```

Embedded below is the initial code required to setup your aws config.
```
const AWS = require('aws-sdk');

AWS.config.update({
  accessKeyId: 'your_access_key_id',
  secretAccessKey: 'your_secret_access_key',
  region: 'your_region',
});


```
``` const AWS = require('aws-sdk')``` <br> import aws-sdk for use in the app.js file

```
AWS.config.update({
  accessKeyId: 'your_access_key_id',
  secretAccessKey: 'your_secret_access_key',
  region: 'your_region',
});)
```
set your aws instance config to connect to your AWS account


**What are the functionalities of the package/library?**

AWS has a massive suite of tools for developers, here are a few of them:
<ul>
<li>VM Hosting<br>
<li>SQL and NoSQL Databases<br>
<li>Email Services<br>
</li>


**When was it created?** <br>
AWS was founded in 2006, and the AWS-SDK NPM Package was created in 2011
<a href = "https://www.npmjs.com/package/aws-sdk?activeTab=versions">[Reference #2]</a>

**Why did you select this package/library?** <br>
I've been starting to explore web development over the past couple months and after building an understanding of html and css, I've begun to use javascript to allow myself to add dynamism to websites. After gaining experience with Express, which is an extremely commonly used library for creating a simple backend for webapps, I've transitioned into learning how to use various AWS tools such as DynamoDB and, in this case, SES


**How did learning the package/library influence your learning of the language?**<br>
The main thing I've realized about nodejs is how reliant It is on other packages and libraries for even simple functionality. After doing a couple google searches, I confirmed that nodejs is a very minimal language, to minimize functionality 'bloat' and maximize efficiency. Before learning this, I was already beginning to become a big fan of writing nodejs because of how clean it felt to write, and how modern it was in terms of its community and usability, but after learning this it makes me even more interested in the language, knowing that it is often high-performance and high-efficiency as well due to reasons such as it's minimalistic design.


**How was your overall experience with the package/library?**<br>
SES was a very easy tool to add to my program, on the front end I just added a text field and button, and on the backend I just added one more endpoint to my API. The only problem I encountered was that I could only send Emails to addresses that I specifically took time to individually verify because my SES account was in 'Sandbox' mode. After contacting AWS Support, they changed my account to include Production access and now my app works with all Email addresses.




References:
<br>
[1] <a href = "https://aws.amazon.com/application-hosting/benefits/#:~:text=AWS%20is%20designed%20to%20allow,access%20AWS%27s%20application%20hosting%20platform.">amazon.com/benefits</a>
<br>
[2] <a href = "https://www.npmjs.com/package/aws-sdk?activeTab=versions">npm.com/aws-sdk/versions</a>
<br>

