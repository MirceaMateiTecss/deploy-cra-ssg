import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  ABOUT_US_PAGE, CONTACT_US_PAGE, PRODUCT_INFO_PAGE, ROOT,
} from '../CONSTANTS';

const useStyles = makeStyles((theme) => ({
  customLink: {
    ...theme.typography.button,
    color: theme.palette.background.paper,
    padding: theme.spacing(1),
    textDecoration: 'none',
  },
}));

const Header = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => {
            history.push(ROOT);
          }}
        >
          <HomeIcon />
        </IconButton>
        <Link
          to={PRODUCT_INFO_PAGE}
          className={classes.customLink}
        >
          Product info
        </Link>
        <Link
          to={ABOUT_US_PAGE}
          className={classes.customLink}
        >
          About us
        </Link>
        <Link
          to={CONTACT_US_PAGE}
          className={classes.customLink}
        >
          Contact us
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
