const fs = require('fs');

const requestHandler = (req, res) => {
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
    req.on('data', (chunk) => { //trigger for each chunk received
      console.log('+ got chunk');
      buffer.push(chunk);
    });

    req.on('end', () => { //trigger when done parsing
      console.log('++ buffer done');
      let data = Buffer.concat(buffer).toString();
      console.log(data);

      //write that to file & announce
      fs.writeFile('messages.txt', data, () => {
        console.log('* write data done');
      })
    })

    // at the mean time, response
    console.log('* redirecting');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
};

module.exports = requestHandler;