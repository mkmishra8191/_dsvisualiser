
const Node = ({node,onClick,onClickRight}) => {

    const x = node.x
    const y = node.y
    
   

    return (
       
           <> 
           <defs>
    <marker id="markerArrow1" markerWidth="13" markerHeight="13" refX="10" refY="6" orient="auto">
      <path d="M2,2 L2,11 L10,6 L2,2" />
    </marker>
  </defs>

  
  {node.left==null ? (
  <text fontSize="0.07em" x={x-8} y={y} onClick={()=>onClick(node)} fill="black">Add Left</text>
  ):<line x1={x} y1={y+2} x2={x-10} y2={y+8} markerEnd={'url(#markerArrow1)'} style={{ stroke: 'black', strokeWidth: 0.1 }}  />
}
  <ellipse fontSize="0.01em" strokeWidth=".1" fill="white" stroke="black" cx={x} cy={y} rx="3" ry="2" />
  <text fontSize="0.1em" x={x} y={y} fill="black">{node.data}</text>
  {node.right==null ? (
  <text fontSize="0.07em" x={x + 5} y={y } onClick={()=>onClickRight(node)} fill="black">Add Right</text>
   
  ):<line x1={x} y1={y+2} x2={x+10} y2={y+8} markerEnd={'url(#markerArrow1)'} style={{ stroke: 'black', strokeWidth: 0.1 }}  />}


</>

    )

}

export default Node
