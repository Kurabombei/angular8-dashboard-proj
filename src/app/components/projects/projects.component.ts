import { Component, OnInit } from '@angular/core';
import { Project } from "../../interfaces/project";
import { Projects } from "../../mockdata/mock-projects";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {


  selectedProject?: Project;
  onSelect(project: Project): void {
    this.selectedProject = project;
  }
  projects = Projects;
  constructor() { }

  ngOnInit() {
  }

}
