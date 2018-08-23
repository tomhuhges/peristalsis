import { rem } from 'polished'

const validLineHeight = lineHeight => {
  return typeof lineHeight === 'number' || lineHeight === 'inherit' || lineHeight === 'normal'
}

const fontSize = (fontSize, lineHeight = 'auto', modifier = 0, isImportant = false) => {
  const important = isImportant ? '!important' : ''
  return `
    /* We provide a px fallback for old IEs not supporting rem values. */
    font-size: ${fontSize} ${important};
    font-size: ${rem(fontSize)} ${important};
    ${validLineHeight(lineHeight) ? `line-height: ${lineHeight} ${important};` : ''}
  `
}

export default fontSize
