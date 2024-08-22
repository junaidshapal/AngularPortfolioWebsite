import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {

  isCollapsed: boolean = true;
  //Tags Used for Filter  
  typescript: boolean = false; 
  angular: boolean = false; 
  java: boolean = false; 
  js: boolean = false; 
  csharp: boolean = false; 
  react: boolean = false; 
  sql: boolean = false; 
  python: boolean = false; 

  //Filtering variable
  filtering:Boolean = false;

  projects = {} as Project[];

  constructor(private titleService: Title, private projectService: ProjectsService){
    this.titleService.setTitle("Junaid - Portfolio");
}
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filtertags: Tag[] = [];

    //Multiple if statements for filter
    if(this.typescript){
      filtertags.push(Tag.TYPESCRIPT);
    }

    if(this.angular){
      filtertags.push(Tag.ANGULAR);
    }

    if(this.csharp){
      filtertags.push(Tag.CSHARP);
    }

    if(this.java){
      filtertags.push(Tag.JAVA);
    }

    if(this.js){
      filtertags.push(Tag.JS);
    }

    if(this.sql){
      filtertags.push(Tag.SQL);
    }

    if(this.react){
      filtertags.push(Tag.REACT);
    }

    if(this.python){
      filtertags.push(Tag.PYTHON);
    }

    //Use of filtering variable either it is true or false
    if(this.python || this.angular || this.csharp || this.java || this.typescript || this.js || this.react || this.sql){
      this.filtering = true;
    }
    else{
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filtertags);
  }

  ResetFilter(){
    this.python = false;
    this.java = false;
    this.js = false;
    this.sql = false;
    this.csharp = false;
    this.react = false;
    this.typescript = false;
    this.angular = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
  }
}

