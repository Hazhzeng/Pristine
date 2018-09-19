import React from 'react';
import { connect } from 'react-redux';
import {
  AccountEmailField,
  AccountPasswordField,
  AccountActionButton,
} from '../components/account';
import {
  status as accountStatus,
  checkEmail,
  changeEmail,
  changePassword,
} from '../actions/AccountActions';

class Account extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleEmailCheck = this.handleEmailCheck.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailCheck() {
    this.props.checkEmail(this.props.email);
  }

  handleEmailChange(event) {
    this.props.changeEmail(event.target.value);
  }

  handlePasswordChange(event) {
    this.props.changePassword(event.target.value);
  }

  handleSubmit() {

  }

  _getActionButtonLabel(status) {
    const label = {
      [accountStatus.LOGGED_OUT]: 'Awaiting email...',
      [accountStatus.LOGGED_IN]: 'You\'ve already logged in...',
      [accountStatus.AWAITING_LOGIN]: 'Login ┬─┬ノ( º _ ºノ)',
      [accountStatus.AWAITING_REGISTER]: 'Register (╯°. °）╯︵ ┻━┻',
    }
    return label[status];
  }

  _isActionButtonDisabled(status) {
    const disabledStatuses = [
      accountStatus.LOGGED_IN,
      accountStatus.LOGGED_OUT
    ];
    return disabledStatuses.includes(status);
  }

  render() {
    return [
      <AccountEmailField
        key="account_email_field"
        label="Please enter your email"
        value={this.props.email}
        handleChange={this.handleEmailChange}
        handleBlur={this.handleEmailCheck}
      />,
      <AccountPasswordField
        key="account_password_field"
        label="Please enter your password"
        value={this.props.password}
        handleChange={this.handlePasswordChange}
      />,
      <AccountActionButton
        key="account_action_button"
        value={this._getActionButtonLabel(this.props.status)}
        disabled={this._isActionButtonDisabled(this.props.status)}
        handleClick={this.props.handleSubmit}
      />
    ];
  }
}

export const AccountContainer = connect(
  state => ({
    view: state.view.currentView,
    progress: state.ui.progress,
    email: state.account.tempEmail || '',
    password: state.account.tempPassword || '',
    status: state.account.status,
  }),
  dispatch => ({
    checkEmail: email => dispatch(checkEmail(email)),
    changeEmail: email => dispatch(changeEmail(email)),
    changePassword: password => dispatch(changePassword(password)),
  })
)(Account);