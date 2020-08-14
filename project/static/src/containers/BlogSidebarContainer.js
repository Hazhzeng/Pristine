import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Drawer } from '@material-ui/core';
import { getAllBlogDates } from '../actions/BlogActions';

class BlogSidebar extends React.PureComponent {
  componentDidMount() {
    this.props.getAllBlogDates();
  }

  render() {
    return (
      <Drawer variant="permanent">
      </Drawer>
    );
  }
}

BlogSidebar.propTypes = {
  getAllBlogDates: PropTypes.func,
};

export const BlogSidebarContainer = connect(
  state => ({
    view: state.view.currentView,
    blogDates: state.blog.blogDates,
    mutex: state.ui.loadingMutex,
  }),
  dispatch => ({
    getAllBlogDates: () => dispatch(getAllBlogDates())
  })
)(BlogSidebar);
