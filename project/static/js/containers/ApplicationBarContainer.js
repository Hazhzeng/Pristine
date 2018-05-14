import { capitalize } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import { withStyles } from '@material-ui/core/styles';

import HomeSelector from '../selectors/HomeSelector';
import UserSelector from '../selectors/UserSelector';

const styles = theme => ({
  appbar: {
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
  }
});

class ApplicationBarContainer extends Component {
  render() {
    const { classes, username } = this.props;
    return (
      <AppBar className={classes.appbar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            {username ? capitalize(username) : 'Pristine'}
          </Typography>
        </Toolbar>
        {this.props.loading && <LinearProgress />}
      </AppBar>
    );
  }
}

const mapStateToProps = state => ({
  username: UserSelector.usernameSelector(),
  loading: HomeSelector.uiSelector(state).loading,
});

const ApplicationBarRedux = connect(mapStateToProps)(ApplicationBarContainer);

export default withStyles(styles)(ApplicationBarRedux);
