/* ==========================================================================
   #WRAPPER
   ========================================================================== */

/**
 * Page-level constraining and wrapping elements.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { clearFix } from 'polished';
import theme from '../themes/theme';

const StyledWrapper = styled.div`
  ${clearFix()}
  padding-right: ${({theme}) => theme.space.base};
  padding-left: ${({theme}) => theme.space.base};
  margin-right: auto;
  margin-left:  auto;
  max-width: ${({theme}) => theme.maxWidth}px;
`;

export class Wrapper extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]),
    className: PropTypes.string
  }
  static defaultProps = {
    theme
  }
  withProps = children => {
    return React.Children.map(children, child =>
      React.cloneElement(child, {
        className: this.props.className,
        theme: this.props.theme
      })
    );
  }
  render() {
    const { theme, children, className } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledWrapper className={className}>
          {this.withProps(children)}
        </StyledWrapper>
      </ThemeProvider>
    );
  }
};
