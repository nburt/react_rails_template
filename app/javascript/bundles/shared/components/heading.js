// @flow
/* eslint-disable react/no-multi-comp */

import React from 'react';
import classNames from 'classnames';
import styles from './styles/heading.scss';

type Props = {
  className?: string,
  children: any
};

export class Heading1 extends React.PureComponent<Props, void> {
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;

    return (
      <h1 className={classNames(styles.h1, className)}>{children}</h1>
    );
  }
}

export class Heading2 extends React.PureComponent<Props, void> {
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;

    return (
      <h2 className={classNames(styles.h2, className)}>{children}</h2>
    );
  }
}

export class Heading3 extends React.PureComponent<Props, void> {
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;

    return (
      <h3 className={classNames(styles.h3, className)}>{children}</h3>
    );
  }
}

export class Heading4 extends React.PureComponent<Props, void> {
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;

    return (
      <h4 className={classNames(styles.h4, className)}>{children}</h4>
    );
  }
}

export class Heading5 extends React.PureComponent<Props, void> {
  static defaultProps = {
    className: ''
  };

  render() {
    const { className, children } = this.props;

    return (
      <h4 className={classNames(styles.h5, className)}>{children}</h4>
    );
  }
}
