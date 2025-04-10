 let letterSearch = ["Xleb","meod","banan","yabloko","aziza"]

 console.log(letterSearch);

 let nBor = []
 let nYoq = []

   for (let element of letterSearch){
    if (element.includes('H')){
        nBor.push(element)
    }else{
        nYoq.push(element)

    }
   }
   console.log(nBor);
   console.log(nYoq);
   
   
 