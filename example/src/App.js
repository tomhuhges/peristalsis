import React, { Component } from 'react'

import { Layout, LayoutItem } from 'peristalsis'

export default class App extends Component {
  render () {
    return (
      <div>
        <Layout gutter="huge">
          <LayoutItem>Hello</LayoutItem>
          <LayoutItem>There</LayoutItem>
        </Layout>
      </div>
    )
  }
}
