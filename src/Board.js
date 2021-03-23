import React, { Component } from "react";
import Stages from './Stages';
import Stage from './Stage';
import './board.css';
import Tasks from './TasksUtil'
class Board extends Component {
    constructor(props){
        super(props)
        this.state={
            stages:Stages.stages,
            modal:'',
            tasks:Tasks.tasks
        }
    }
    addStage=()=>{
        this.setState({modal:'add'})
    }
    onClick=()=>{
        Stages.add(this.refs.val.value);
        this.setState({stages:Stages.stages,modal:''})
    }
    addTask=(content,stage)=>{
        Tasks.addTask(content,stage.toLowerCase());
        console.log(Tasks.tasks)
        this.setState({tasks:Tasks.tasks})
    }
    
  render() {
      const {stages,tasks}=this.state
    return (
        <React.Fragment>
            <button onClick={this.addStage}>Add stage</button>
      <div name='Board' key='board' style={{display:'flex'}}>
          
        {stages.map((stage)=>{
            return <Stage stageName={stage} tasks={Tasks.getTasks(stage.toLowerCase())} addTask={this.addTask}/>
        })}
      </div>
      {/* can create different Component for this also */}

      {this.state.modal == 'add' ? <div className="addTaskModal">
       <input ref='val' type='text' placeholder='Stage Name'/>
       <button onClick={this.onClick}>Submit </button></div>:null}
      </React.Fragment>
    );
  }
}

export default Board;