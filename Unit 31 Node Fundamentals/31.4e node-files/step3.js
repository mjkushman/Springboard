const axios = require('axios')
const fs = require('fs')


async function cat(path) {

    let fileData =  await fs.promises.readFile(path, 'utf8')
    // (err,data)=>{
        // if(err){
        //     console.log(`Error reading "${path}":`, err)
        //     process.kill;
        // }
        // else{
        //     console.log('This is content of the file:',data)
        //     return data
        // }
    // }
    // )

    console.log('and this is fileData',fileData)
    
    return fileData
}

async function webCat(URL,){
    let data = await axios.get(URL);
    console.log(data.data)
    return data.data
}


function write(filename, content){
    fs.writeFile(filename, content, 'utf8', (err,filename)=>{
        if(err){
            console.log(`Counldn't write to ${filename}:`, err)
        }
    }
    )
}


let args = process.argv
// cat(args[4])
console.log(args)

if(args.indexOf('--out') > -1){
    // execute as if --out flag exists
    let writeToFile = process.argv[3]
    let content
    if(process.argv[4].indexOf('http') > -1){
        content = webCat(process.argv[4])
        write(writeToFile,'hello')
    }
    else{
        console.log(process.argv[4])
        content = cat('one.txt')
        // console.log('CAT CONTENT',content)
        // write(writeToFile,content)
    }
}
else{
    // no --out flag
    if(process.argv[2].indexOf('http') > -1){
        webCat(process.argv[2])
    }
    else{
        cat(process.argv[2])
    }
}
