import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Divider from 'material-ui/Divider';
import Drawer from 'material-ui/Drawer';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress';
import TextField from 'material-ui/TextField';
import Input from 'material-ui/Input/Input';
import Menu, { MenuItem } from 'material-ui/Menu';

import Search from 'material-ui-icons/Search';
import Clear from 'material-ui-icons/Clear';
import MenuIcon from 'material-ui-icons/Menu';
import ArrowDropDown from 'material-ui-icons/ArrowDropDown';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the styleSheet
      // root: {
      //   // Name of the rule
      //   background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      //   borderRadius: 3,
      //   border: 0,
      //   color: 'white',
      //   height: 48,
      //   padding: '0 30px',
      //   boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
      // },
    },
    MuiAppBar: {
      // root: {
      //   display: 'flex',
      //   flexDirection: 'column',
      //   width: '100%',
      //   zIndex: 99,
      //   //background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      // }
    }
  }
});


export { 
  MuiThemeProvider, 
  createMuiTheme, 

  Button,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuIcon,
  Divider,
  Drawer,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  CircularProgress,
  Search,
  TextField,
  Input,
  Clear,
  Menu,
  MenuItem,
  ArrowDropDown,

  theme
}