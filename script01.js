function array(string) {
    let arr = string.split(",")
    if(arr.length <= 2) {
      return null 
    } else {
       return arr.slice(1, -1).join(" ")
    }
   //   if(string === '' || string.length === 1 || string.length === 3) {
   //    return null
   //   } else {
   //   
   // }
  }
  console.log(array('A1,B2,C3,D4,E5'))