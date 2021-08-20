/* eslint-disable max-len */
import CONFIG from './config';
const moment = require('moment');

const today = moment().format('YYYY-MM-DD');
const sevenDaysAgo = moment().subtract(7, 'd').format('YYYY-MM-DD');

const API_ENDPOINT = {
  MATCHES: `${CONFIG.BASE_URL}competitions/2021/matches?dateFrom=${sevenDaysAgo}&dateTo=${today}`,
  STANDINGS: `${CONFIG.BASE_URL}competitions/2021/standings`,
  TEAMS: `${CONFIG.BASE_URL}competitions/2021/teams`,
  TEAM: (id) => `${CONFIG.BASE_URL}teams/${id}`,
};

export default API_ENDPOINT;
