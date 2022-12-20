export class ProjectService {
    public async getProjects(): Promise<any>{
        const response = await fetch('/projects')
        return await response.json();
    }

    public async getProject(project: any) {
        const response = await fetch('/project/'+project.id)
    }
}