import { useState,useRef } from "react"

import SelectView from "./omponents/SelectView"
import Tree from "./omponents/Tree"

function App() {
  const [tree,setTree] = useState([])
  const [view,setView] = useState([])
  const [viewName, setViewName] = useState("")
  const root = useRef({})
  const rootNode = useRef({})

  

  const styles = { 
    
    fontSize:20
    
}
const styless = { 
  
  fontSize:20,
  
  paddingLeft:30,
  paddingRight:30
  
}



  const getView = async (requestView)=>{

    
    let responseView=[]
  if (requestView==="select"){
    setViewName(requestView)

    

  } 
  if(requestView==="right_view"){
    responseView = await fetchView(requestView)
    
    
      setViewName("Right View -")
    setView(responseView)
    }
    if(requestView==="right_diagonal_view"){
      responseView = await fetchView(requestView)
      
      
        setViewName("Right Diagonal -")
      setView(responseView)
      }
      if(requestView==="left_diagonal_view"){
        responseView = await fetchView(requestView)
        
        
          setViewName("Left Diagonal -")
        setView(responseView)
        }


    if(requestView==="top_view"){
      responseView = await fetchView(requestView)
      
      
        setViewName("Top View -")
      setView(responseView)
      }
       
  if(requestView==="left_view"){
  responseView = await fetchView(requestView)
  
  
    setViewName("Left View -")
  setView(responseView)
  }

  if(requestView==="bottom_view"){
    responseView = await fetchView(requestView)
    
    
      setViewName("Bottom View -")
    setView(responseView)
    }

  console.log(viewName + view)

    
   } 






const fetchView = async (requestView)=>{

  const arr ={}
  const arr1={}

Object.entries(root.current).map(([k,v])=>v.left===null&&v.right===null ?  arr1[k]=v:arr[k]=v) 

 getRoot(arr,arr1)

 

    

const res = await fetch(`http://localhost:8080/v1/${requestView}`,{
  method:'Post',
  headers: {
    'Content-type': 'application/json',
    },
    body: JSON.stringify(rootNode.current[1]),
  }
 )

  const data= await res.json()
  
 


  
  return data
}


   const getRoot = (arr,arr1)=>{

    rootNode.current=arr1
   
   if(arr1[1]!==undefined)
  
         return 

    
    const  tempArr1={}
      Object.entries(arr).map(([k,v])=>
      arr1[2*k] !== undefined  && arr1[2*k+1] !== undefined ?  tempArr1[k]={...v,left:arr1[2*k], right:arr1[2*k+1]}:
      arr1[2*k] !== undefined  && v.right === null ?  tempArr1[k]={...v,left:arr1[2*k]}:
      arr1[2*k] !== undefined  && arr[2*k+1] !==undefined ?  tempArr1[2*k]=arr1[2*k]:
      arr1[2*k+1] !== undefined  && arr[2*k] !==undefined ?  tempArr1[2*k+1]=arr1[2*k+1]:
      arr1[2*k+1] !== undefined && v.left === null ?  tempArr1[k]={...v, right:arr1[2*k+1]}:null) 
     getRoot(arr,tempArr1)

   }


  const  onClick =()=>{
         setTree([])
    }

  const addLeft=(node)=>{
      
       const newTree=[...tree.map((obj)=>obj.id===node.id ? {
    ...obj, left:2*node.id} : obj)]

    setTree([...newTree,{x:node.x-10,y:node.y + 10,id:2*node.id,data:tree.length+1,left:null,right:null}])
    root.current[2*node.id]= {data:tree.length+1,left:null,right:null}
      
      root.current[node.id]={...root.current[node.id],left:2*node.id}
     
    }
    const addRight=(node)=>{

    
      const newTree=[...tree.map((obj)=>obj.id===node.id ? {
       ...obj, right:2*node.id+1} : obj)]
   
       setTree([...newTree,{x:node.x+10,y:node.y + 10,id:2*node.id+1,data:tree.length+1,left:null,right:null}])
       root.current[2*node.id+1]= {data:tree.length+1,left:null,right:null}
       root.current[node.id]={...root.current[node.id],right:2*node.id+1}
       
   
       }

    const addRoot= ()=> {

      setTree([{x:50,y:5,id:1,data:tree.length+1,left:null,right:null}])

      root.current[1]= {data:tree.length+1,left:null,right:null}

      console.log(root.current[1])


      
    }
      return (
        <>
        
        {tree.length > 0 ? (
          <button style={styless} onClick={onClick}>Clear</button>):(
            <button style={styles} onClick={addRoot}>Add Root</button>
            
            
            )

        }
        <SelectView onClick={getView} style={{float:'right'} } tree={tree} />
               <div className='container'>
 
          <Tree onClick={addLeft} onClickRight={addRight} viewName={viewName} tree={tree}/>
             </div>
            <button style={styles}>{viewName}  {view.join()}</button>
            
 

             </>
    )
}
export default App
