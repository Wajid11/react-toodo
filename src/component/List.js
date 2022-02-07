import { useState } from "react"



function List() {
const [arr,setarr] = useState([]);

// let myarr=[
//     'wajid',
//     'majid',
//     'sajid'
// ]




function add(){
  let ListInputVal =  document.getElementById('List');
//   ListInputVal.value;
    // console.log( ListInputVal.value)
    var li = ListInputVal.value;
    // arr = myarr
    const newTodos = [...arr, li];
    setarr(newTodos)
}


// let del = (e)=>{
    // console.log(e.ind)
    // let ListInputVal =  document.getElementById('List');
  //   ListInputVal.value;
    //   console.log(e.key)
    // alert(e)
    // newTodos.splice()
    //   var li = ListInputVal.value;
      // arr = myarr
    //   const newTodos = [...arr, li];
    //   setarr(newTodos)
//   }



    return(
        <div>
<input type='text' id="List"/><button onClick={add}>Add</button>

{arr.map((item,ind) =><div key={ind}><h1 >{item} </h1> <span key={ind} onClick={(e)=>{
   let up = arr.splice({ind},1 )

   
return setarr([...arr],up)

// const upararr = [...arr,]

    

}}>x</span></div>)}

        </div>
    )
}

export default List;