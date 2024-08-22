import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  IsWorkExperienceOpen: boolean = false;
  isEducationOpen: boolean = false;
  isCertificatesOpen: boolean = false;
  isSkillsOpen: boolean = false;

  constructor(private titleService: Title, private renderer: Renderer2){
    this.titleService.setTitle("Junaid - Resume");
}

DownloadFile(){
  const link = this.renderer.createElement('a');
  link.setAttribute('target', '_blank');
  link.setAttribute('href', '../../assets/CV.pdf');
  link.setAttribute('download', 'CV.pdf');
  link.click();
  link.remove();  
}
}
