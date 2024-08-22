import { Component, Input, input, OnInit } from '@angular/core';
import { Project } from '../_models/Project';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent implements OnInit {

  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;


  constructor(private modalService: BsModalService){

  }
  ngOnInit(): void {
  }

  OpenProjectModal(){
    const modalOptions: ModalOptions ={
      class: "modal-lg",
      initialState:{
        project: this.project
      }
    };
      this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions); 
  }
}
