/**
 * @class ExampleComponent
 */

import styled from 'styled-components'
import { inuitFontSize, inuitClearfix, inuitHiddenVisually } from './tools'

export default styled.p`
  ${inuitFontSize('16px')}
  ${inuitClearfix()}
  ${inuitHiddenVisually()}
`
