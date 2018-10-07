// @flow

// Libraries
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Navigation from '../components/navigation';

// Types
import type { Dispatch } from '../../shared/types/redux';

type State = {};

type MappedState = {};

export const mapStateToProps = (state: State): MappedState => (state);

const mapDispatchToProps = (dispatch: Dispatch): Object => ({
  ...bindActionCreators({ test: () => {} }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
