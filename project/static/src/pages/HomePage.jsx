import React from 'react';
import PageBase from './PageBase';
import { BlogContainer, BlogSidebarContainer } from '../containers';

export class HomePage extends PageBase {
  renderComponent() {
    return <BlogContainer />;
  }

  renderSidebar() {
    return <BlogSidebarContainer />;
  }
}
