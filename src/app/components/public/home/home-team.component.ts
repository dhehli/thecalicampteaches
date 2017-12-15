import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Team } from '../../admin/team/team';
import { TeamServicePublic } from './home-team.service';

@Component({
  selector: 'team-home',
  templateUrl: './home-team.component.html'
})
export class TeamHomeComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamServicePublic) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }
}
