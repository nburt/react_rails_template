// @flow

// Libraries
import React from 'react';

// Components
import Modal from './modal';
import Link from './link';

declare var process: Object;

type Props = *;

type State = {
  hasError: boolean
};

type HandleErrorInfo = {
  componentStack: string,
};

export default class DefaultErrorBoundary extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, info: HandleErrorInfo) {
    if (!process.env.NODE_ENV !== 'production') {
      /* eslint-disable */
      console.log(error);
      console.log(info);
      /* eslint-enable */
    }
    this.setState({ hasError: true });
  }

  render() {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <Modal
          isOpen={hasError}
          headerText="Something went wrong"
        >
          <p>
            Our team has been notfied of the error and will be looking into the cause.
            Please refresh the page and try again or contact us at&nbsp;
            <Link intent="primary" href="mailto:replace-me@example.com">
              replace-me@example.com
            </Link>
            .
          </p>
        </Modal>
      );
    }

    return children;
  }
}
