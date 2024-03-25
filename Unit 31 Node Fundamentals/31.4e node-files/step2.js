const axios = require('axios')
const fs = require('fs')
function cat(path) {
    fs.readFile(path, 'utf8', (err,data)=>{
        if(err){
            console.log(`Error reading "${path}":`, err)
            process.kill;
        }
        else{
            console.log(data)
        }
    })
}



async function webCat(URL){
    let data = await axios.get(URL);
    console.log(data.data)
}


if(process.argv[2].indexOf('http') > -1){
    webCat(process.argv[2])
}
else{
    cat(process.argv[2])
}