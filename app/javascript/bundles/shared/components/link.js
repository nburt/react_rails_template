// @flow

// Libraries
import React from 'react';
import classNames from 'classnames';

// Types
import type { Node } from 'react';

// Styles
import styles from './styles/link.scss';

type Props = {
  href: string,
  target?: string,
  intent?: 'primary',
  children: Node
}

export default class Link extends React.PureComponent<Props, void> {
  static defaultProps = {
    target: '',
    intent: 'primary'
  };

  render() {
    const {
      intent,
      href,
      children,
      target
    } = this.props;

    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target={target}
        className={classNames(styles.link, styles[intent])}
      >
        {children}
      </a>
    );
  }
}
