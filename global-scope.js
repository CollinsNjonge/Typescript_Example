var name = 'Collins'

function changeName(){
  name = 'Collo'
}
changeName()
console.log(name) //Collo

function ping (){
    setTimeout(()=>console.log("Ping"),1000);
  }
  ping() // "Ping"

  const num =[1,2]
const[a,b]=num
console.log(a);