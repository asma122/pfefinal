import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projectlist',
  templateUrl: './projectlist.component.html',
  styleUrls: ['./projectlist.component.scss']
})
export class ProjectlistComponent implements OnInit {
  projectForm!: FormGroup;
  projects: Project[] = [];
  projetEnEdition: Project | null = null; // Variable pour stocker les données du projet en cours d'édition

  constructor(private projectService: ProjectService, private formBuilder: FormBuilder) {
    this.projectForm = this.formBuilder.group({
      nomProduit: ['', Validators.required],
      name: ['', Validators.required],
      branche: ['', Validators.required],
      datedebut: ['', Validators.required],
      datefin: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectService.getAllProjects().subscribe(
      projects => {
        this.projects = projects;
      },
      error => {
        console.error('Erreur lors du chargement des projects :', error);
      }
    );
  }

  createProject() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      if (this.projetEnEdition) {
        // Si le projet est en cours d'édition, mettez à jour ses valeurs
        Object.assign(this.projetEnEdition, formData);
        // Mettez à jour le projet dans la liste des projets
        const index = this.projects.findIndex(project => project.id === this.projetEnEdition?.id);
        if (index !== -1) {
          this.projects[index] = { ...this.projetEnEdition }; // Mettez à jour la liste des projets avec le projet modifié
        }
        // Réinitialisez le formulaire et la variable de projet en édition
        this.resetForm();
      } else {
        // Si le projet n'est pas en cours d'édition, ajoutez-le comme un nouveau projet
        const newProject: Project = formData;
        // Ajoutez le nouveau projet à la liste des projets
        this.projects.push(newProject);
        // Réinitialisez le formulaire
        this.projectForm.reset();
      }
    }
  }

  deleteProject(nomProduit: string) {
    const index = this.projects.findIndex(project => project.nomProduit === nomProduit);
    if (index !== -1) {
      this.projects.splice(index, 1);
    }
  }

  editProject(project: Project) {
    this.projetEnEdition = project;
    this.projectForm.setValue({
      nomProduit: project.nomProduit,
      name: project.name,
      branche: project.branche,
      datedebut: project.datedebut,
      datefin: project.datefin
    });
  }

  resetForm() {
    this.projectForm.reset();
    this.projetEnEdition = null;
  }
}
export { Project };


