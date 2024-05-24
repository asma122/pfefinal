import { Component } from '@angular/core';

@Component({
  selector: 'app-branche',
  templateUrl: './branche.component.html',
  styleUrls: ['./branche.component.scss']
})
export class BrancheComponent {
  data = [
    { 
      branch: { name: '', }, 
      application: { name: '', status: '' }, 
      pipeline: { id: '', status: '', Info: '' }, 
      sonar: { blocker: '', critical: '', high: '' }, 
      NexusIq: { blocker: '', critical: '', high: '' }, 
      Fortify: { blocker: '', critical: '', high: '' } 
    },
  ];

}
