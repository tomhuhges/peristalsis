const clearfix = (parent = '&') => {
  return `${parent}::after {
    content: "" !important;
    display: block !important;
    clear: both !important;
  }`
}

export default clearfix
