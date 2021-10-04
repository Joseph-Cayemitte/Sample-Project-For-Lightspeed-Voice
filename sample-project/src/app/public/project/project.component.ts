import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
 data: any;
 projectName: any;
 tasks: any;
 assigned: any;
 time: any;
 totalTime: any;
 name: any;

  constructor( private http: HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.data = window.localStorage.getItem("project")
    this.name = window.localStorage.getItem("name")
    this.getProjectData(this.data)
  }
  getProjectData(project:any){
      const ProjectUrl = "http://localhost:8000/project/"+project;
      this.http.get<string>(ProjectUrl).subscribe(
        (ProjectResult:any) => {
          console.log('success')
          this.projectName = ProjectResult.project.replace("_"," ");
          let taskArray = ProjectResult.TaskAssignedTo;
          taskArray = taskArray.split(", ");
          let projectTasks = []
          let projectassignments = []

          for(const task in taskArray)
          {

            let tempArray = taskArray[task].split(":")
            projectTasks.push(tempArray[0])
            projectassignments.push(tempArray[1])
          }
          this.tasks = projectTasks
          this.assigned = projectassignments

          taskArray = ProjectResult.TaskEstimatedTime;
          taskArray = taskArray.split(", ");
          let timedTasks = []
          let eta = 0;

          for(const task in taskArray)
          {

            let tempArray = taskArray[task].split(":")
            timedTasks.push(tempArray[1])
            eta += Number(tempArray[1])
          }
          this.time = timedTasks
          this.totalTime = eta;
        },
        error => {
          console.log('error');
          console.log(error);
          }
      )
  }

  goBackToPrev()
  {
    const url = "/user/"+this.name;
    this.router.navigate([url]);
  }

}