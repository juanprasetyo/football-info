import FootballData from '../../data/footballdb-source';
import {createMatchesItem} from '../templates/template-creator';

const Matches = {
  async render() {
    return /* html */ `
      <div class="container">
        <div class="row">
          <div class="col">
            <h2 class="mt-3">Matches</h2>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col"><center>Home</center></th>
                  <th scope="col"><center>Score</center></th>
                  <th scope="col"><center>Away</center></th>
                </tr>
              </thead>
              <tbody class="tbody-matches">
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const matches = await FootballData.matches();
    const matchesContainer = document.querySelector('.tbody-matches');

    matches.forEach((match) => {
      matchesContainer.innerHTML += createMatchesItem(match);
    });
    console.log(matches);
  },
};

export default Matches;
