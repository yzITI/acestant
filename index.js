const { Client } = require('@notionhq/client')
const { token } = require('./config')

const notion = new Client({ auth: token })

async function test () {
  const response = await notion.search({ query: 'Acestant' })
  console.log(response)
}
test()