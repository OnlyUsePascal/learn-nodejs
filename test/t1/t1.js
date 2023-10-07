const fs = require('fs');
const http = require('http');

// fs.writeFileSync('./test.txt', 'something here');

const server = http.createServer((req, res) => {
  const reqMethod = req.method;
  const reqUrl = req.url;

  // get
  if (reqUrl === '/'){
    console.log('GET');
    res.write('<h1> what the actual fuck </h1>');
    res.write('<form action="/sendMess" method="post"><input type="text" name="message"><input type="submit" value="submit"></form>');
    return res.end();

  } 
  
  // post
  if (reqUrl === '/sendMess' && reqMethod === 'POST') {
    console.log('POST');
    // retrieve message
    let buffer = [];
    req.on('data', (chunk) => {
      console.log('+ got chunk');
      buffer.push(chunk);
    });

    req.on('end', () => {
      console.log('++ buffer done');
      let result = Buffer.concat(buffer).toString();
      console.log(result);
    })

    // at the mean time, response
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

let port = 3000;
server.listen(port);

