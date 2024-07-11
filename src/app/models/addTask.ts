
import { DataservicesService } from "../services/dataservices.service";

export class newTask {
    title: string;
    description: string;
    priority: string;
    status: string;
    id: string;
    due_date: string;

    constructor(
        title: string = '',
        description: string = '',
        priority: string = '',
        status: string = '',
        id: string = '',
        due_date: string = ''
    ) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.status = status;
        this.id = id;
        this.due_date = due_date;
    }
};
export function getTaskDetails(id: any) {
    const dataService = new DataservicesService(); // Instantiate DataService
    const taskData = dataService.Data();
    if (id == 0) {
        const task = new newTask()
        return task
    }
    else {
        for (let a of taskData) {
            if (a.id == id) {
                return a
            }
        }
    }
}