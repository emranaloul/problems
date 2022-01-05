const  getCommonChars = (arr) => {
    let arr2 = arr[0].split('').filter((x,y) => y === arr[0].split('').indexOf(x));
  arr.map((v,i)=>{
   arr2.map((val,y)=>{
     if(!v.includes(val)){
       arr2.splice(y,1)
     }
   })
})
return arr2
}