import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  id: string | null;
  name: any;
  projects: any;
  members: any;
  time: any;
  
  constructor(private route: ActivatedRoute, private http: HttpClient, private router:Router) {
    this.id=this.route.snapshot.paramMap.get("id");
   }


  ngOnInit(): void {
    this.getEmployeesData();
  }

  getEmployeesData(){
    const UserUrl = "http://localhost:8000/user/"+this.id;

    this.http.get<string>(UserUrl).subscribe(
      (UserResult: any) => {
        console.log('success');
        this.name = UserResult.name
        this.projects = UserResult.projects.split(", ");
        let projectArray = this.projects;
        let assignedArray: any[][] = []
        let etaArray: number[] = []
        for(const project in projectArray)
        {
          const ProjectUrl = "http://localhost:8000/project/"+ projectArray[project].replace(" ","_");
          this.http.get<string>(ProjectUrl).subscribe( 
            (ProjectResult:any) => {
              console.log('success');
              let memberArray = ProjectResult.TaskAssignedTo.split(", ")
              let memberList = []
              let timeArray = ProjectResult.TaskEstimatedTime.split(", ")
              let currentTime = 0

              for(const person in memberArray)
              {
                let tempArray = memberArray[person].split(":")
                if(memberList.indexOf(tempArray[1]) < 0)
                {
                  memberList.push(tempArray[1])
                }
              }
              assignedArray.push(memberList)
              this.members = assignedArray;
              for(const hours in timeArray)
              {
                let tempArray = timeArray[hours].split(":")
                currentTime += Number(tempArray[1]);
              }
              etaArray.push(currentTime)
              this.time = etaArray;
            },
            error => {
              console.log('error');
              console.log(error);
              }
          )
        }
      },
      error => {
        console.log('error');
        console.log(error);
        }
    )
  }

  getProjectdata(row: any){
    window.localStorage.setItem("project", row.replace(" ","_"))
    let employee = this.name
    window.localStorage.setItem("name", employee);
    this.router.navigate(['']);

  }
  
  
}
