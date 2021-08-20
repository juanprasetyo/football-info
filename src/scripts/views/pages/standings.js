import FootballData from '../../data/footballdb-source';
import {createStandingTemplate} from '../templates/template-creator';

const Standings = {
  async render() {
    return /* html */ `
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="mt-3">Standings</h2>
          </div>
        </div>
        <div class="row">
          <div class="col container-standing">

          </div>
        </div>
      </div>
      `;
  },

  async afterRender() {
    const standings = await FootballData.standings();
    console.log(standings);

    const standingContainer = document.querySelector('.container-standing');

    standingContainer.innerHTML = createStandingTemplate(standings);
  },
};

export default Standings;
