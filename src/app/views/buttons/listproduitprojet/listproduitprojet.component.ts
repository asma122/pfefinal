import { Component, OnInit } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-listproduitprojet',
  templateUrl: './listproduitprojet.component.html',
  styleUrls: ['./listproduitprojet.component.scss']
})
export class ListproduitprojetComponent implements OnInit {
  projects: Project[] = [];


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().pipe(
      catchError(error => {
        // Gérer l'erreur ici, par exemple, afficher un message d'erreur à l'utilisateur
        console.error('Une erreur s\'est produite lors du chargement des projets : ', error);
        return throwError(error);
      })
    ).subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

}
