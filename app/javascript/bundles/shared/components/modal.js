// @flow

// Libraries
import React from 'react';
import type { Node } from 'react';
import ReactModal from 'react-modal';

// Components
import FontAwesome from './fontAwesome';
import { Heading3 } from './heading';

// Styles
import styles from './styles/modal.scss';

type Props = {
  children: Node,
  onRequestClose?: Function,
  headerText: string
};

export default class Modal extends React.PureComponent<Props, void> {
  static defaultProps = {
    onRequestClose: () => {}
  };

  render() {
    const {
      children,
      onRequestClose,
      headerText,
      ...rest
    } = this.props;

    return (
      <ReactModal
        className={styles.modalBody}
        ariaHideApp={false}
        onRequestClose={onRequestClose}
        {...rest}
      >
        <header className={styles.header}>
          <div className={styles.closeButtonContainer}>
            {
              onRequestClose ? (
                <span
                  onClick={onRequestClose}
                  onKeyPress={onRequestClose}
                  role="button"
                  tabIndex="0"
                >
                  <FontAwesome
                    glyph="times"
                    className={styles.closeIcon}
                  />
                </span>
              ) : null
            }
          </div>
          <Heading3 className={styles.headerHeading}>{headerText}</Heading3>
        </header>
        <div className={styles.modalInnerBody}>
          { children }
        </div>
      </ReactModal>
    );
  }
}
