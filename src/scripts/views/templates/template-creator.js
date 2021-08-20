/* eslint-disable max-len */
const createStandingTemplate = (standings) => /* html */ `
  <div class="table-responsive-md">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Club</th>
            <th scope="col">Play</th>
            <th scope="col">Win</th>
            <th scope="col">Draw</th>
            <th scope="col">Lost</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody class="tbody-standings">
          ${_createListStanding(standings)}
        </tbody>
      </table>
  </div>
`;

const _createListStanding = (standings) => {
  let html = ``;
  standings[0].table.forEach((standing) => {
    html += /* html */`  
      <tr>
        <th scope="row">${standing.position}</th>
        <td>
          <img data-src="${standing.team.crestUrl}" class="lazyload" alt="" style="width: 30px; height: 30px;">
          <p>${standing.team.name}</p>
        </td>
        <td>${standing.playedGames}</td>
        <td>${standing.won}</td>
        <td>${standing.draw}</td>
        <td>${standing.lost}</td>
        <td>${standing.points}</td>
      </tr>
    `;
  });

  return html;
};

const createTeamItemTemplate = (team) => /* html */`
  <div class="col-md-6">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4 text-center">
          <img data-src="${team.crestUrl}" class="img-fluid rounded-start lazyload" alt="...">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${team.name}</h5>
            <p class="card-text">Stadium : ${team.venue}</p>
            <p class="card-text">Address : ${team.address}</p>
            <p class="card-text"><small class="text-muted">Since ${team.founded}</small></p>
            <a href="/#/team/${team.id}" class="btn btn-primary">Read More...</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const createMatchesItem = (match) => /* html */`
  <tr>
    <td>
      <center><p>${match.homeTeam.name}</p></center>
    </td>
    <td><center>${match.score.fullTime.homeTeam} - ${match.score.fullTime.awayTeam}</center>
    </td>
    <td>
      <center><p>${match.awayTeam.name}</p></center>
    </td>
  </tr>
`;

const createDetailTeam = (team) => /* html */ `
  <div class="col">
    <div class="card">
      <picture class="d-flex justify-content-center p-3" style="width: 100%;">
        <img data-src="${team.crestUrl}" class="card-img-top lazyload" alt="..." style="width: 250px;">
      </picture>
      <div class="card-body">
        <h3 class="card-title text-center mb-2">${team.name}</h3>
        <hr>
        <div class="row">
          <div class="col-md-6">
            <ul>
              <li>
                <h6>Short Name</h6>
                <p>${team.shortName}</p>
              </li>
              <li>
                <h6>Stadium</h6>
                <p>${team.venue}</p>
              </li>
              <li>
                <h6>Address</h6>
                <p>${team.address}</p>
              </li>
              <li>
                <h6>Club Colors</h6>
                <p>${team.clubColors}</p>
              </li>
            </ul>
          </div>
          <div class="col-md-6">
            <ul>
              <li>
                <h6>Email</h6>
                <p>${team.email}</p>
              </li>
              <li>
                <h6>Phone</h6>
                <p>${team.phone}</p>
              </li>
              <li>
                <h6>Website</h6>
                <p>${team.website}</p>
              </li>
              <li>
                <h6>Founded</h6>
                <p>${team.founded}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const createTeamSquad = (key, squad) => /* html */`
  <tr>
    <th scope="row">${key}</th>
    <td>${squad.name}</td>
    <td>${squad.position}</td>
    <td>${squad.countryOfBirth}</td>
  </tr>
`;

export {createStandingTemplate, createTeamItemTemplate, createMatchesItem, createDetailTeam, createTeamSquad};

