import FootballData from '../../data/footballdb-source';
import UrlParser from '../../routes/url-parser';
import {createDetailTeam, createTeamSquad} from '../templates/template-creator';

const Team = {
  async render() {
    return /* html */ `
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="mt-3">Detail Club</h2>
          </div>
        </div>
        <div class="row container-team">

        </div>
        <div class="row mt-3">
          <div class="col">
          <div class="table-responsive">
              <table class="table">
                <thead class="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Position</th>
                    <th scope="col">Nationality</th>
                  </tr>
                </thead>
                <tbody class="container-squad">

                </tbody>
              </table>
            </div>
          </div>
        <div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const team = await FootballData.team(url.id);
    const containerTeam = document.querySelector('.container-team');
    const containerSquad = document.querySelector('.container-squad');
    containerTeam.innerHTML = createDetailTeam(team);

    for (const [key, value] of Object.entries(team.squad)) {
      containerSquad.innerHTML += createTeamSquad(key, value);
    }

    console.log(team);
  },
};

export default Team;
