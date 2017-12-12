import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Team } from './team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html'
})
export class TeamComponent implements OnInit {
  teams: Team[];

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.getTeams();
  }

  getTeams(): void {
    this.teamService.getTeams()
    .subscribe(team => this.teams = team);
  }

  delete(team: Team): void {
    this.teams = this.teams.filter(t => t !== team);
    this.teamService.deleteTeam(team).subscribe();
  }

}
