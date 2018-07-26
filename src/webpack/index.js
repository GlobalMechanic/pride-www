import 'normalize.css'
import './public/pride-www.css'

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

function getServerProps () {

  let props
  try {

    const serverPropsTag = document.getElementById('pride-www-server-props')

    props = JSON.parse(serverPropsTag.textContent)

    serverPropsTag.textContent = ''

  } catch (err) {
    // it could be that the server sent bad data, but generally any failure
    // will simply mean no data has been sent
  }

  // make double sure we're sending back an object
  return props !== null && typeof props === 'object'
    ? props
    : {}

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

  const props = getServerProps()
  const main = getMainTag()

  const element = <BrowserRouter>
    <Website {...props} />
  </BrowserRouter>

  hydrate(element, main)
})
