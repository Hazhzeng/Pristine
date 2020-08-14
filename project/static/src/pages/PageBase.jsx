import React from 'react';
import Grid from '@material-ui/core/Grid';
import { AppbarContainer } from '../containers';

export class PageBase extends React.PureComponent {
  renderComponent() {
    throw new Error('renderComponent needs to be implemented');
  }

  render() {
    return (
      <Grid
        container
        spacing={24}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <AppbarContainer />
        {this.renderSidebar && this.renderSidebar()}
        {this.renderComponent()}
      </Grid>
    )
  }
}

export default PageBase;
