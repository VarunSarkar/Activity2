let fileContObj = require("./commands/filecont");
let n_cmdObj = require("./commands/n_cmd");
let s_cmdObj = require("./commands/s_cmd");
let b_cmdObj = require("./commands/b_cmd");


let inputArr = process.argv.slice(2);
let optArr = [];
let fileArr = [];
for(let i = 0; i < inputArr.length;i++) {
    if(inputArr[i].charAt(0) == "-"){
        optArr.push(inputArr[i]);
    }else{
        fileArr.push(inputArr[i]);
    }
}

if(optArr.includes("-n") && optArr.includes("-b")){
    console.log("Error : -s and -b can't run simultaneously");
    return;
}
let content = fileContObj.contFn(fileArr);

if(optArr.includes("-s")){
    content = s_cmdObj.sFunc(content);
}
if(optArr.includes("-n")){
    content = n_cmdObj.nFunc(content);
}
if(optArr.includes("-b")){
    content = b_cmdObj.bFunc(content);
}

console.log(content);