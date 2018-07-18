### 静态服务器

    #!/usr/bin/env node
    const path = require('path');
    const fs = require('fs');
    const Http = require('http');
    const port = process.argv.splice(2)[0];
    const rootPath = process.cwd();

    let server = Http.createServer(function(req, res){
        var resPath = rootPath + req.url;
        fs.stat(resPath, function(err, stats){
            if(err)return;
            createResponse(resPath, res)
        })
    })

    function createResponse(path, res){
        let bn = path.split('.').pop();
        let contentType = '';
        if(bn == 'jpg'){
            contentType = 'image/jpeg';
        }
        if(bn == 'mp3'){
            contentType = 'audio/mp3';
        }
        if(bn == 'mp4'){
            contentType = 'video/mpeg4';
        }
        if(bn == 'html' || bn == 'htm'){
            contentType = '	text/html';
        }
        if(bn == 'css'){
            contentType = ' text/css';
        }
        res.setHeader('Content-Type', contentType || 'application/octet-stream');
        fs.createReadStream(path).pipe(res)
    }

    server.listen(port, function(){
        console.log('server is listening on port : ' + port)
    })
