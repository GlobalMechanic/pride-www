import 'normalize.css'
import './pride-www.css'

/******************************************************************************/
// Dynamic Dependencies
/******************************************************************************/

const dependencies = Promise.all([
  import('react'),
  import('react-dom'),
  import('react-router-dom'),
  import('../ui/root')
])

/******************************************************************************/
// Helper
/******************************************************************************/

function getPeopleFromServer () {

  if (process.env.NODE_ENV === 'development')
    return require('../people').default()

  let people
  try {

    const serverPropsTag = document.getElementById('pride-www-server-props')

    people = JSON.parse(serverPropsTag.textContent).people

    serverPropsTag.textContent = ''

  } catch (err) {
    console.log(err)
    // it could be that the server sent bad data, but generally any failure
    // will simply mean no data has been sent
  }

  // make double sure we're sending back an object
  return Array.isArray(people)
    ? people
    : []

}

function getMainTag () {
  return document.getElementById('pride-www')
}

/******************************************************************************/
// Execute
/******************************************************************************/

window.addEventListener('load', async () => {
  const [
    { default: React },
    { hydrate },
    { BrowserRouter },
    { default: Website }
  ] = await dependencies

  const people = getPeopleFromServer()
  const main = getMainTag()

  const element = <BrowserRouter>
    <Website people={people} />
  </BrowserRouter>

  hydrate(element, main)
})
