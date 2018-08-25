import React, { Component } from 'react';
import styled from 'styled-components';

import { Wrapper, Layout, LayoutItem } from 'peristalsis';

const DashedWrapper = styled(Wrapper)`
  border: 4px dotted #ff8686;
`;

const DashedLayout = styled(Layout)`
  border: 4px dotted #36d088;
`;

const DashedBox = styled.div`
  border: 4px dotted #739eff;
  padding: 20px;
  border-radius: 10px;
`;

export default class App extends Component {
  render () {
    return (
      <DashedWrapper>
        <DashedLayout>
          {[...Array(12).keys()].map(i => (
            [...Array(i+1).keys()].map(j => (
              <LayoutItem width={`1/${i+1}@desktop`}>
                <DashedBox></DashedBox>
              </LayoutItem>
            ))
          ))}
        </DashedLayout>
      </DashedWrapper>
    )
  };
};
