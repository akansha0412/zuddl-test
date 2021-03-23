import React, { Component } from "react";
import { DragDropContext ,Droppable,Draggable  } from 'react-beautiful-dnd';

class Tasks extends Component {
  render() {
      const{tasks}=this.props
    return (
        <React.Fragment>
            <DragDropContext onDragEnd={()=>{}}>
            <Droppable droppableId="tasks">
    {(provided) => (
     <ul className="tasks" {...provided.droppableProps} ref={provided.innerRef} style={{listStyleType: 'none'}}>
         
     {tasks.map((task,index)=>{
return (
<Draggable key={task.id.toString()} draggableId={task.id.toString()} index={index}>
      {(provided) => (
<li name='task' draggable='true'  ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{height:'30px',padding:'10px',border:'1px solid grey',margin:'5px'}}>
 {task.content} 
</li>        
      )}
    </Draggable>
)

     })
 }
 {provided.placeholder}
     </ul>
    )}
  </Droppable>
            
            </DragDropContext>
      </React.Fragment>
      
    );