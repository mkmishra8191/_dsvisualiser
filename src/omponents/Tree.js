import Node from "./Node"



const Tree = ({tree,onClick,onClickRight,viewName}) => {
  
    return (
         <svg viewBox="0 0 100 40">
        {tree.map((node)=>(

            
        
        <Node key={node.id} onClick={onClick} onClickRight={onClickRight} viewName={viewName}  node={node}/>
       
        

        ))} 
     
        
    </svg>
    
    )
}

export default Tree
