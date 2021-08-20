import FootballData from '../../data/footballdb-source';
import {createTeamItemTemplate} from '../templates/template-creator';

const Teams = {
  async render() {
    return /* html */ `
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="mt-3">Clubs</h2>
          </div>
        </div>
        <div class="row container-team">
        
        </div>
      </div>
    `;
  },

  async afterRender() {
    const teams = await FootballData.teams();
    const containerTeam = document.querySelector('.container-team');

    console.log(teams);

    teams.forEach((team) => {
      containerTeam.innerHTML += createTeamItemTemplate(team);
    });
  },
};

export default Teams;
