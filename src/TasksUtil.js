var Tasks={
 tasks:[
     {
         id:1,
         content:'task1',
         stage:'todo'
     },
     {
        id:2,
        content:'task2',
        stage:'todo'
    },
    {
        id:3,
        content:'task3',
        stage:'doing'
    },
    {
        id:4,
        content:'task4',
        stage:'done'
    },
    {
        id:5,
        content:'task5',
        stage:'todo'
    },
    {
        id:6,
        content:'task6',
        stage:'done'
    },
 ],
 addTask:function(content,stage){
    let obj = {id:this.tasks.length + 1, content:content,stage:stage}
    this.tasks.push(obj);
 },
 getTasks:function(stageName){
    let result= this.tasks.filter(task=> {return task.stage==stageName})
    return result;
 }
   
}
export default Tasks;