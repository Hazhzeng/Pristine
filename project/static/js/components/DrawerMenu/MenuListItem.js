import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import HomeIcon from 'material-ui-icons/Home';
import InfoIcon from 'material-ui-icons/InfoOutline';
import PostIcon from 'material-ui-icons/InsertDriveFile';
import DefaultIcon from 'material-ui-icons/CheckBoxOutlineBlank';

const MenuListItemMap = {
  home: <HomeIcon />,
  info: <InfoIcon />,
  post: <PostIcon />,
}

const MenuListItem = ({ name }) => {
  const icon = MenuListItemMap[name] || <DefaultIcon />;

  return (
    <Link to={name}>
      <ListItem button>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={_.capitalize(name)} />
      </ListItem>
    </Link>
  )
};

export default MenuListItem;
