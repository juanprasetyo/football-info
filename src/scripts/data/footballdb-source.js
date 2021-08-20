/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
import API_ENDPOINT from '../globals/api-endpoint';

class FootballData {
  static async matches() {
    const response = await fetch(API_ENDPOINT.MATCHES, {
      headers: {
        'X-Auth-Token': '57ebcc84eb2c4866aeee3fcccad3da6c',
      },
    });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.matches;
  }

  static async standings() {
    const response = await fetch(API_ENDPOINT.STANDINGS,
        {
          headers: {
            'X-Auth-Token': '57ebcc84eb2c4866aeee3fcccad3da6c',
          },
        });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.standings;
  }

  static async teams() {
    const response = await fetch(API_ENDPOINT.TEAMS,
        {
          headers: {
            'X-Auth-Token': '57ebcc84eb2c4866aeee3fcccad3da6c',
          },
        });
    const responseJson = await response.json();
    console.log(responseJson);
    return responseJson.teams;
  }

  static async team(id) {
    const response = await fetch(API_ENDPOINT.TEAM(id), {
      headers: {
        'X-Auth-Token': '57ebcc84eb2c4866aeee3fcccad3da6c',
      },
    });
    return response.json();
  }
}

export default FootballData;
