const string2int = () =>{
  // 
  let text = "a5kb7c3";
  //split ตัวแปรที่ให้เข้ามาเพื่อแยกตัวประกอบ
  let textsplit = text.split("")
  // filter ตัวแปร RegEx เพื่อหา เฉพาะตัวเลข
  let filterInt = textsplit.filter((item,index)=>(/^\d+$/).test(item));
  //จากนั้นเอามา join กันเพื่อรวม
  let filterInttoText = filterInt.join("")
  // กำหนดตัวแปร int เพื่อเก็บค่า
  var SumOfInt = 0;
  //วนลูปเพื่อนำ ค่า string มาแปลง
  for(var i=0; i < filterInttoText.length;i++){
    // แปลงตัวแปร โดยเช็คจาก ascii code ณ ตำแหน่ง ที่เป็นเลข 0 ถึง 9
    var numbertypeInt = filterInttoText.charCodeAt(i)-48
    // จากนั้นเอาผลรวมของตัวเลขที่หามามารวมกัน โดยดูจากตำแหน่งตัวเลขที่เกิดขึ้น
    var numPos = Math.pow(10,filterInttoText.length-(i+1))
    
    SumOfInt = SumOfInt + (numbertypeInt*numPos)
    
  }
  console.log(SumOfInt,typeof SumOfInt)
}

string2int();