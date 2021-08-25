const argsArr = process.argv.splice(2);
// loop through the args and make then delays

if (argsArr.length === 0){
  return;
}

// if negative number - skip
for(let elem of argsArr){
  if(elem < 0){
    continue;
  }
  if(isNaN(elem)){
    continue;
  }
  setTimeout(()=>{
    process.stdout.write('\x07');
    process.stdout.write(elem);

  },elem * 1000);

}


// given user input set timeout alarm events 
// use process.argv to return array of user arguments
