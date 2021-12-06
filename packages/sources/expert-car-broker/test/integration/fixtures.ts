import nock from 'nock'

export const mockResponseSuccess = (): nock =>
  nock('https://prices.expertcarbroker.workers.dev/', {
    encodedQueryParams: true,
  })
    .get('/ferrari-f12tdf/feed-1')
    .query({ api_key: 'fake-api-key' })
    .reply(200, (_, request) => ({ value: 482421 }), [
      'Content-Type',
      'application/json',
      'Connection',
      'close',
      'Vary',
      'Accept-Encoding',
      'Vary',
      'Origin',
    ])
