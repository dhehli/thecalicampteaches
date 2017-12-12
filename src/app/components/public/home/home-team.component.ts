import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Team } from '../../team/team';
import { TeamService } from '../../team/team.service';

@Component({
  selector: 'team-home',
  templateUrl: './home-team.component.html'
})
export class TeamHomeComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(teams => this.teams = teams);
  }

}
