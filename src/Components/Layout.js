/*
  #LAYOUT
/**
 * Grid-like layout system.
 *
 * The layout object provides us with a column-style layout system. This file
 * contains the basic structural elements, but classes should be complemented
 * with width utilities, for example:
 *
 *   <Layout>
 *     <LayoutItem 1/2>
 *     </LayoutItem>
 *     <LayoutItem 1/2>
 *     </LayoutItem>
 *   </Layout>
 *
 * The above will create a two-column structure in which each column will
 * fluidly fill half of the width of the parent. We can have more complex
 * systems:
 *
 *   <Layout>
 *     <LayoutItem 1/1 1/3@medium>
 *     </LayoutItem>
 *     <LayoutItem 1/2 1/3@medium>
 *     </LayoutItem>
 *     <LayoutItem 1/2 1/3@medium>
 *     </LayoutItem>
 *   </Layout>
 *
 * The above will create a system in which the first item will be 100% width
 * until we enter our medium breakpoint, when it will become 33.333% width. The
 * second and third items will be 50% of their parent, until they also become
 * 33.333% width at the medium breakpoint.
 *
 * We can also manipulate entire layout systems by adding a series of modifiers
 * to the `Layout` block. For example:
 *
 *   <Layout reverse />
 *
 * This will reverse the displayed order of the system so that it runs in the
 * opposite order to our source, effectively flipping the system over.
 *
 *   <Layout [right|center] />
 *
 * This will cause the system to fill up from either the centre or the right
 * hand side. Default behaviour is to fill up the layout system from the left.
 *
 * There are plenty more options available to us: explore them below.
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { rem } from 'polished';
import theme from '../themes/theme';

// By default we use the `font-size: 0;` trick to remove whitespace between
// items. Set this to true in order to use a markup-based strategy like
// commenting out whitespace or minifying HTML.
const useMarkupFix = false;

const StyledLayout = styled.div`

  /* Allows us to use the layout object on any type of element. */
  display: block; 
  list-style: none;

  /* We need to defensively reset any box-model properties. */
  margin:  0; 
  padding: 0;

  /* Use the negative margin trick for multi-row grids: http://csswizardry.com/2011/08/building-better-grid-systems/ */
  margin-left: -${({theme, gutter}) => gutter ? theme.space[gutter] : theme.space.base}; 

  ${!useMarkupFix ? 'font-size: 0;' : ''}
`;

export class Layout extends React.Component {
  static propTypes = {
    theme: PropTypes.object,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ])
  }
  static defaultProps = {
    theme
  }
  withProps = children => {
    return React.Children.map(children, child =>
      React.cloneElement(child, { gutter: this.props.gutter })
    );
  }
  render() {
    const { theme, children } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <StyledLayout {...this.props}>
          {this.withProps(children)}
        </StyledLayout>
      </ThemeProvider>
    );
  }
};

export const LayoutItem = styled.div`

  /* Required in order to combine fluid widths with fixed gutters. */
  box-sizing: border-box; 

  /* Allows us to manipulate grids vertically, with text-level properties, etc. */
  display: inline-block; 

   /* Default item alignment is with the tops of each other, like most traditional grid/layout systems. */
  vertical-align: top;

  /* By default, all layout items are full-width (mobile first) */
  width: 100%;

  /* Gutters provided by left padding:
  http://csswizardry.com/2011/08/building-better-grid-systems/ */
  padding-left: ${({theme, gutter}) => gutter ? theme.space[gutter] : theme.space.base};

  ${({theme}) => !useMarkupFix ? `

    /* Fallback for old IEs not supporting rem values. */
    font-size: ${theme.fontSize.base};

    font-size: ${rem(theme.fontSize.base)};
  ` : ''}
`;
