// The MIT License (MIT)

// Copyright (c) 2015 Song Zhou

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
var fs = require('fs');
var render = require('./render.js');

// 转换 markdown 文件夹下的所有 .md文件
// render('./markdown/','./html/');

// 转换 markdown 子文件夹下的所有 .md文件
readDir('./markdown/','./markdown/')

function readDir(dir,writeDir){
    var files = fs.readdirSync(dir);
    for (let file in files) {
        var file_name = files[file];
        var file_path = dir + file_name
        var stat = fs.statSync(file_path);
        if(stat.isDirectory()){
            var write_path = writeDir + file_name
            if(!fs.existsSync(write_path)){
                fs.mkdirSync(write_path)
            }
            render(file_path,write_path);
        }
    }
}
