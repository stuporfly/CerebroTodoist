import Loading from "cerebro-ui/Loading";
import  TaskListInterface   from "../Interfaces";
import Preload from "cerebro-ui/Preload";
 export default { 
	TaskListPreview:function  (Wrapper,Actions)  {
		let list = Wrapper.GetAllTodoistData();
	  
		return (
		<Preload promise={list} loader={Loading()}>
		  {(promiseResult) => (
					
			<TaskListInterface actions={Actions} content={promiseResult} />
		  )}
		</Preload>
	  )	  
}
};
