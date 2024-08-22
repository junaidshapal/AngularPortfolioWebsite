import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {


  projects: Project[]=[
    {
      id: 0,
      name:"Python Project",
      summary:"This is a Python Project",
      projectLink:"https://lingostry.com/",
      description:"A Python-based application that provides comprehensive data analysis and visualization tools, utilizing libraries such as Pandas and Matplotlib to generate insightful reports and interactive charts.",
      pictures:["../../assets/abc.jpg","../../assets/img2.jpg","../../assets/img3.jpg"],
      tags:[Tag.PYTHON, Tag.SQL]
    },

    {
      id: 1, name:"Angular Project",
      summary:"This is a angular Project",
      projectLink:"https://lingostry.com/",
      description:" A responsive Angular app that allows businesses to collect and analyze customer feedback, featuring dynamic forms, data visualization, and secure data storage through API integration.",
      pictures:["../../assets/abc.jpg","../../assets/img2.jpg","../../assets/img3.jpg"],
      tags:[Tag.ANGULAR, Tag.TYPESCRIPT]
    },

    {
      id: 2, name:"Dot Net Project",
      summary:"This is a .Net Project",
      projectLink:"https://lingostry.com/",
      description:"This project really helps u a lot in future.",
      pictures:["../../assets/abc.jpg","../../assets/img2.jpg","../../assets/img3.jpg"],
      tags:[Tag.CSHARP, Tag.SQL]
    },

    {
      id: 3, name:"Asp.Net using SQL",
      summary:"This is a Project that is built in Asp.Net with SQL server as Database.",
      projectLink:"https://lingostry.com/",
      description:"A feature-rich ASP.NET web app using SQL Server to manage event scheduling, attendee registration, and ticketing, with real-time data updates and reporting capabilities.",
      pictures:["../../assets/abc.jpg","../../assets/img2.jpg","../../assets/img3.jpg"],
      tags:[Tag.SQL, Tag.CSHARP]
    },

    {
      id: 4, name:"React Project",
      summary:"This is a React Project",
      projectLink:"https://lingostry.com/",
      description:" A dynamic React application that helps users manage and track their daily expenses with intuitive charts and categorization features.",
      pictures:["../../assets/abc.jpg","../../assets/img2.jpg","../../assets/img3.jpg"],
      tags:[Tag.REACT, Tag.ANGULAR, Tag.JS]
    },

    {
      id: 5, name:"JAVA Project",
      summary:"This is a Java Project",
      projectLink:"https://lingostry.com/",
      description:"A comprehensive Java application that streamlines the cataloging, borrowing, and returning of books in a library, featuring a user-friendly interface and robust database integration.",
      pictures:["../../assets/abc.jpg","../../assets/img2.jpg","../../assets/img3.jpg"],
      tags:[Tag.JAVA, Tag.SQL]
    }
  ]

  constructor() {}

  
  GetProjects() {
    return this.projects;
  } 

  GetProjectsById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);

    if(project === undefined){
      throw new TypeError('There is no project that matches the ID: ' +id);
    }

    return project; 
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[] = [];

    this.projects.forEach(function(project){
      let foundAll = true;

      filterTags.forEach(function(filterTag){
        if(project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if(foundAll){
        filteredProjects.push(project);
      }
    });
    return filteredProjects;
  }
}
