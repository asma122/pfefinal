// import { Component, OnInit} from '@angular/core';
// import{TacheService} from 'src/app/services/tache.service';
// import{Tache} from'src/app/models/tache';

// @Component({
//   selector: 'app-tache',
//   templateUrl: './tache.component.html',
//   styleUrls: ['./tache.component.scss']
// })
// export class TacheComponent implements OnInit {
//   taches!: Tache[];



//   constructor(private tacheService: TacheService) { }

//   ngOnInit(): void {
//     this.getAllTaches();
//   }

//   getAllTaches() {
//     this.tacheService.getAllTaches().subscribe(
//       response => {
//         this.taches = response;
//       },
//       error => {
//         console.error('Erreur lors de la récupération des tâches:', error);
//       }
//     );
//   }
//   createTache() {
//     const newTache: Tache = {
//       id: null,
//     task: 'string',
//     idprojet:'string'
//     };

//     this.tacheService.createTache(newTache).subscribe(
//       response => {
//         console.log('Tâche créée avec succès:', response);
//         this.getAllTaches();
//       },
//       error => {
//         console.error('Erreur lors de la création de la tâche:', error);
//       }
//     );
//   }

//   deleteTache(id: number) {
//     this.tacheService.deleteTache(id).subscribe(
//       () => {
//         console.log('Tâche supprimée avec succès');
   
//         this.getAllTaches();
//       },
//       error => {
//         console.error('Erreur lors de la suppression de la tâche:', error);
//       }
//     );
//   }

// }
