import axios from "axios";
var cache = require('memory-cache');
export default class TodoistApiWrapper {
	constructor({  }) {
        this.apiToken = '313037e74f776fecac3733c9ddb6d72b1331739f';
//        this.Client = new TDSClient(this.apiToken);
        this.headers = {
			headers: { Authorization: `Bearer ${this.apiToken}` },
		};
	}

     create(task) {
	};
 CreateTask(name)
{

    return  axios.post(
		`https://api.todoist.com/sync/v8/quick/add`,
        {
            content: name
              },
			this.headers
		);
        this.syncTime=Date.now()-1000*60*60;
  
}
GetAllTodoistData()
{console.log (this.syncTime);
    console.log (Date.now()-1000*60*5);
   if (! cache.get('AllData'))
{   
     cache.put('AllData',axios.post(
		`https://api.todoist.com/sync/v8/sync`,
        {
            sync_token: '*',
            resource_types: '["all"]'
              },
			this.headers
		),1000*60*5);
        console.log(cache.get('AllData'));
        this.syncTime=Date.now();
            }
  //          console.log(cache.get('AllData'));
 
        return Promise.resolve( cache.get('AllData'));


}
}