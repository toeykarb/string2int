function Main(){
  console.log("Input Value !!!!!")
  process.stdin.once('data' , (text) => {
    var check = text.toString().match(/\./g);
    var NumbDot = 0;
    if(check !== null){
      NumDot = check.length
      
      if(NumDot>1){
        console.log("Invalid Value")
        process.stdin.pause();
        return; 
      }
      
    }
    if(text.toString !== ""){
      string2intAndFloat(text.toString())
    }else{
      console.log("Empty Value")
      process.stdin.pause();
    }
  })
}

const string2intAndFloat = (text) =>{
  var counter = 0;
  
  let textsplit = text.split("")
  
  let filterInt = textsplit.filter((item,index)=>(/^\d+$|\./).test(item));
  let filterIntNotDot = textsplit.filter((item,index)=>(/^\d+$/).test(item));
  
  if(filterInt.length === 0 && filterIntNotDot.length ===0){
    console.log("Empty Int Value")
    process.stdin.pause();
  }else{
  
  let filterInttoText = filterInt.join("")
  var position = filterInttoText.indexOf(".");
  var SumOfInt = 0;
  var numPos;
  var numbertypeInt;
  
  for(var i=0; i < filterInttoText.length;i++){
    
   if(counter < 0){
     
    numbertypeInt = filterInttoText.charCodeAt(i)-48
  
   numPos = Math.pow(10,counter).toFixed(Math.abs(counter))
   
  
   SumOfInt = SumOfInt +(numbertypeInt*numPos)
   
   
   
   counter =counter - 1;
   
   }else{

    if(filterInttoText.charCodeAt(i) === 46){
      counter =counter - 1;
      
     }else{
     
      numbertypeInt = filterInttoText.charCodeAt(i)-48
      
      if(position >= 0){
       
        numPos = Math.pow(10,(position-(i+1)))
      }else{
        numPos = Math.pow(10,(filterInttoText.length-(i+1)))
      }
      SumOfInt = SumOfInt + (numbertypeInt*numPos)
      
     }
     
   }
   
 }
  
 if(position > 0 ){
  console.log(SumOfInt.toFixed(filterInttoText.length -(position+1)),typeof SumOfInt)
    }else{
      console.log(SumOfInt,typeof SumOfInt)
    }
  
 
 process.stdin.pause();
  }
  
 
}
//asq12sqeqwe.123we  
Main();
// ผมปรับ Code string2Int ให้สามารถรองรับเคสที่เป็นทั้ง float และ Int ได้