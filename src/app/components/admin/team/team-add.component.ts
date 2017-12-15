import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import $ from 'jquery';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team-add',
  templateUrl: './team-add.component.html'
})
export class TeamAddComponent implements OnInit {
  error = {};
  success: boolean;
  isSubmitting: boolean;

  constructor(
    private teamService: TeamService
  ) { }

  ngOnInit() {

  }

  add(firstname: string, lastname: string, email: string, location: string, onlineState: string): void {
    this.isSubmitting = true;
    let formData = new FormData();

    let file = $("#image")[0].files[0];

    formData.append('image', file);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('location', location);
    formData.append('onlineState', onlineState);


    this.teamService.addTeam(formData)
    .subscribe(team => {
      this.isSubmitting = false;
      this.error = [];

      if(team.errors){
        team.errors.forEach(e => this.error[e.param] = e.msg);
      }else{
        this.success = true;
      }
    });
  }

}
