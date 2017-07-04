/**
 * Created by xinzhang on 7/4/17.
 */

module.exports = {
  path: '/user/:id',
  method: 'GET',
  template: {
    id: (params, query, body) =>params.id,
    name: 'anyName',
    address: {
      zip: 'anyCode',
      city: 'anyCity'
    }
  }
};
