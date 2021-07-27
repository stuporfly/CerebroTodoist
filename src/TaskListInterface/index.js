import { Loading, KeyboardNav, KeyboardNavItem } from "cerebro-ui";
import styles from "./style.css";


const TaskListInterface = ({ actions,content }) => {
	console.log(actions);
	console.log("---");
//console.log(content);
console.log("---");
	return <Loading />
// 	const action = (task) => {
// 		// if (task) {
// 		// 	myClient.completeTask({ TaskObject: task });
// 		// }
//         // TODO: "DONE" selected task

// 		actions.hideWindow();
// 	};
// 	console.log("---");
// console.log(content);
// console.log("---");
// if (content) {
// 		if (content.data.items.length === 0) {
// 			return (
// 				<div className={styles.wrapper}>
// 					<h2>Today Tasks</h2>

// 					<KeyboardNav>
// 						<ul className={styles.list}>
// 							<KeyboardNavItem tagName={"li"} onSelect={() => action()}>
// 								No tasks for today! Is this #TodoistZero ?
// 							</KeyboardNavItem>
// 						</ul>
// 					</KeyboardNav>
// 				</div>
// 			);
// 		}
// 		return (
// 			<div className={styles.wrapper}>
// 				<h2>Today Tasks</h2>
// 				<KeyboardNav>
// 					<ul className={styles.list}>
// 						{content.map((task) => {
// 							return (
// 								<KeyboardNavItem
// 									tagName={"li"}
// 									key={task.id}
// 									onSelect={() => action(task)}>
// 									<div className={styles.floatLayout}>
// 										<span className={styles.floatLeft}>{task.content}</span>
// 										<span className={styles.floatRight}>
// 											{(() => {
// 												const hour = new Date(task.due.datetime)
// 													.toTimeString()
// 													.split(" ")[0];
// 												if (hour !== "Invalid") return "|| ⌛ " + hour;
// 											})()}
// 										</span>
// 									</div>
// 								</KeyboardNavItem>
// 							);
// 						})}
// 					</ul>
// 				</KeyboardNav>
// 			</div>
// 		);
// 	} else return <Loading />;
};
export default TaskListInterface;
