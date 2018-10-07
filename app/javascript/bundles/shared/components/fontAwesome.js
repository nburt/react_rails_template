// @flow

import React from 'react';
import classNames from 'classnames';

type Props = {
  glyph: string,
  className?: string,
  onClick?: (event: SyntheticEvent<*>) => any,
  spin?: boolean
}

export default class FontAwesome extends React.PureComponent<Props, void> {
  static defaultProps = {
    className: '',
    onClick: () => {},
    spin: false
  };

  render() {
    const {
      className,
      glyph,
      onClick,
      spin = false
    } = this.props;

    return (
      <i
        className={classNames('fa', `fa-${glyph}`, className, { 'fa-spin': spin })}
        aria-hidden="true"
        onClick={onClick}
      />
    );
  }
}
