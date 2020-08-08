import { ProjectModel } from './project.model';
export class ExperienceModel {

    constructor(
        public compagny: string,
        public situation: string,
        public startDate: string,
        public endDate: string,
        public currently: boolean,
        public project: Array<ProjectModel>
    ) { }
}
