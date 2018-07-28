import styled from 'styled-components'

/******************************************************************************/
// Main Components
/******************************************************************************/

const Sticky = styled.div`
   position: ${props => props.nonSticky ? 'static' : 'sticky'};
   top: 0;
   width: 100vw;
   height: 100vh;
   overflow: hidden;
   z-index: -1;
`
/******************************************************************************/
// Exports
/******************************************************************************/

export default Sticky
