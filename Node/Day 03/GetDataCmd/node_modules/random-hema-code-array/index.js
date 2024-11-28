console.log("Hello")

const data=[
    "Class 01 Html classe",
    "Class 02 CSS classe",
    "Class 03 JS class",
    "Class 04 React Class",
    "Class 05 Node Class"
]
function getRandomData(){
   let ramdomIndex = Math.floor(Math.random() * data.length)
   console.log(ramdomIndex)
    // console.log(data[0])
    // console.log(data[ramdomIndex])
    return data[ramdomIndex]

}
getRandomData()

module.exports=getRandomData