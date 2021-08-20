import Matches from '../views/pages/matches';
import Standings from '../views/pages/standings';
import Teams from '../views/pages/teams';
import Team from '../views/pages/team';

const routes = {
  '/': Matches, // default page
  '/matches': Matches,
  '/standings': Standings,
  '/teams': Teams,
  '/team/:id': Team,
};

export default routes;
