import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import $ from 'jquery';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html'
})
export class TeamDetailComponent implements OnInit {
  team: Team;
  error = {};
  success: boolean;
  isSubmitting: boolean;

  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getTeam();
  }

  getTeam(): void {
    const id = this.route.snapshot.paramMap.get('uid');
    this.teamService.getTeam(id)
      .subscribe(team => this.team = team);
  }

  update(firstname: string, lastname: string, email: string, location: string, onlineState: string): void {
    this.isSubmitting = true;
    let formData = new FormData();

    let file = $("#image")[0].files[0];

    formData.append('id', this.team.id);
    formData.append('image', file);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('location', location);
    formData.append('onlineState', onlineState);

    this.teamService.updateTeam(formData)
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
