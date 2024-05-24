import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TacheService } from 'src/app/services/tache.service';
import { Tache } from 'src/app/models/tache';





@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {
  taskForm!: FormGroup;
  editingTask: Tache | null = null; // Tâche en cours d'édition
  tasks: Tache[] = [];

  constructor(private formBuilder: FormBuilder, private tacheservice: TacheService) {
    this.taskForm = this.formBuilder.group({
      nomProjet: ['', Validators.required],
      tache: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadTache();
  }

  loadTache() {
    this.tacheservice.getAllTachesWithProjectDetails().subscribe(
      taches => {
        this.tasks = taches.map(tache => {
          if (tache.project && tache.project.nomProjet) {
            tache.Nomprojet = tache.project.nomProjet;
          }
          return tache;
        });
      },
      error => {
        console.error('Erreur lors du chargement des tâches des projets :', error);
      }
    );
  }

  createTache() {
    if (this.taskForm.valid) {
      const newTask: Tache = {
        Nomprojet: this.taskForm.value.nomProjet,
        tache: this.taskForm.value.tache,
        status: 'En cours'
      };
      this.tacheservice.createTache(newTask).subscribe((res) => {
        console.log('Tâche créée avec succès :', res);
        this.tasks.push(newTask);
        this.taskForm.reset();
      }, error => {
        console.error('Erreur lors de la création de la tâche :', error);
      });
    }
  }

  supprimerTache(task: Tache): void {
    this.tasks = this.tasks.filter(tache => tache !== task);
  }

  editerTache(task: Tache): void {
    this.taskForm.patchValue({
      nomProjet: task.Nomprojet,
      tache: task.tache
    });
    this.editingTask = task;
  }

  resetForm(): void {
    this.taskForm.reset();
    this.editingTask = null;
  }
}export { Tache };