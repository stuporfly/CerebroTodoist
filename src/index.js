import TodoistApiWrapper from "./TodoistApiWrapper";
import Loading from "cerebro-ui/Loading";
import Preload from "cerebro-ui/Preload";
import  TaskListInterface   from "Interfaces";

this.wrapper = new TodoistApiWrapper({  });
function TaskListPreview (Wrapper,Actions)  {
  let list = Wrapper.GetAllTodoistData();

//   return (
//   <Preload promise={list} loader={Loading()}>
//     {(promiseResult) => (
              
//       <TaskListInterface actions={Actions} content={promiseResult} />
//     )}
//   </Preload>
// );

 return (<Loading />);
}

export const fn = ({ term, display,actions }) => {
  // Put your plugin code here
 
  //  this.Client.create(
  //   { type: "task" },
  //   new Task({
  //     content: 'taskText',
  //     due_string: "today",
  //     due_lang: "en"
  //   })
  // )

//  this.wrapper.CreateTask("test @asap");
//this.wrapper.GetAllTodoistData();

display({
    title: `You've entered ${term}`,
    getPreview:()=> TaskListPreview(this.wrapper,actions)  
  })
} 


