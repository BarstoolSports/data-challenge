const https = require('https')
const stitchToken = '61df9635fca22916d96dc1ccb990c210e7b35b1acc82f9f968a5d2d6cea766fc'

importData({
  table_name: 'podcast_episodes',
  schema: {
    properties: {
      podcast_name: { type: 'string' },
      episode_guid: { type: 'string' },
      episode_title: { type: 'string' },
      episode_date: { type: 'string', 'format': 'date' },
      episode_mp3: { type: 'string' }
    }
  },
  messages: [
    {
      action: 'upsert',
      sequence: 0,
      data: { 
        podcast_name: 'Test Podcast',
        episode_guid: '00000000-0000-0000-0000-000000000001',
        episode_title: 'My First Episode',
        episode_date: '2021-01-01',
        episode_mp3: 'https://test.com/sample-2.mp3'
      }
    },
    {
      action: 'upsert',
      sequence: 0,
      data: { 
        podcast_name: 'Test Podcast',
        episode_guid: '00000000-0000-0000-0000-000000000002',
        episode_title: 'My Second Episode',
        episode_date: '2021-02-01',
        episode_mp3: 'https://test.com/sample-1.mp3'
      }
    }
  ],
  key_names: [
    'podcast_name', 
    'episode_guid'
  ]
})
  .then(console.log)
  .catch(console.error)
  .finally(process.exit)

async function importData(data) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'api.stitchdata.com',
      port: 443,
      path: '/v2/import/batch',
      method: 'POST',
      headers: {
        Authorization: `Bearer ${stitchToken}`,
        'Content-Type': 'application/json'
      }
    }

    const req = https.request(options, (res) => {
      let data = ''
      res.on('data', (chunk) => data += chunk)
      res.on('error', reject)
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: JSON.parse(data)
      }))
    })

    req.write(JSON.stringify(data))

    req.end()
  })
}