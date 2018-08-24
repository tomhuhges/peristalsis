# peristalsis  
ˌpɛrɪˈstalsɪs  
_**noun** physiology_  
> the involuntary constriction and relaxation of the muscles of the intestine or another canal, creating wave-like movements which push the contents of the canal forward.

layout for boborygmous components

[![NPM](https://img.shields.io/npm/v/peristalsis.svg)](https://www.npmjs.com/package/peristalsis) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save-dev peristalsis
```

## Usage

```jsx
import React, { Component } from 'react'

import { Layout, LayoutItem } from 'peristalsis'

class Example extends Component {
  render () {
    return (
      <Layout gutter="small">
        <LayoutItem width={["1/1", "1/2", "1/4"]}>
          // ... children
        </LayoutItem>
        <LayoutItem width={["1/1", "1/2", "1/4"]}>
          // ... children
        </LayoutItem>
        <LayoutItem width={["1/1", "1/2", "1/4"]}>
          // ... children
        </LayoutItem>
        <LayoutItem width={["1/1", "1/2", "1/4"]}>
          // ... children
        </LayoutItem>
      </Layout>
    )
  }
}
```

## License

MIT © [tomhuhges](https://github.com/tomhuhges)
