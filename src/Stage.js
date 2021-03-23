import React, { Component } from "react";
import './stage.css'
import Tasks from './Tasks'
import { DragDropContext ,Droppable,Draggable  } from 'react-beautiful-dnd';

class Stage extends Component {
    constructor(props){
        super(props)
        this.state={
            modal:''
        }
    } 
    addTask=()=>{
        this.setState({modal:'add'})
    }
    onClick=()=>{
        this.props.addTask(this.refs.val.value,this.props.stageName);
        this.setState({modal:''})
    }
  render() {
      const{tasks,stageName}=this.props
    return (
        <React.Fragment>
      <div name='Stage'>
       <h4>{stageName}</h4>
       {<DragDropContext onDragEnd={()=>{}}><Tasks tasks={tasks}/> </DragDropContext>}
       <button onClick={this.addTask} >Add Task</button>
      </div>
      {this.state.modal == 'add' ? <div className="addTaskModal">
      <input ref='val' type='text' placeholder='Task Content'/>
      <button onClick={this.onClick}>Submit </button></div>:null}
      </React.Fragment>
    );
  }
}

export default Stage;
