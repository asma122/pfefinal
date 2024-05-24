import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Tache } from '../tache/tache.component';
import { TacheService } from'src/app/services/tache.service';



@Component({
  selector: 'app-consultertache',
  templateUrl: './consultertache.component.html',
  styleUrls: ['./consultertache.component.scss']
})
export class ConsultertacheComponent implements OnInit {
  tasks: Tache[] = [];
  dataSource!: MatTableDataSource<Tache>;
  displayedColumns: string[] = ['Nomprojet', 'tache', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private tacheservice: TacheService) {}

  ngOnInit() {
    this.loadTache();
  }

  loadTache() {
    this.tacheservice.getAllTachesWithProjectDetails().subscribe(
      taches => {
        // console.log('Tâches avec détails du projet :', taches);
        this.tasks = taches.map(tache => {
          tache.Nomprojet = tache.project ? tache.project.Nomprojet : '';
          return tache;
        });
        // console.log('Tâches après ajout de Nomprojet :', this.tasks);
        this.dataSource = new MatTableDataSource<Tache>(this.tasks);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Erreur lors du chargement des taches des projets :', error);
      }
    );
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}export { Tache };