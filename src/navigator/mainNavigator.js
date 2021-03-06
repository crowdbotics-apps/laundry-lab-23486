import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen49187158Navigator from '../features/BlankScreen49187158/navigator';
import Maps187140Navigator from '../features/Maps187140/navigator';
import Additem187139Navigator from '../features/Additem187139/navigator';
import Maps187135Navigator from '../features/Maps187135/navigator';
import UserProfile187131Navigator from '../features/UserProfile187131/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen49187158: { screen: BlankScreen49187158Navigator },
Maps187140: { screen: Maps187140Navigator },
Additem187139: { screen: Additem187139Navigator },
Maps187135: { screen: Maps187135Navigator },
UserProfile187131: { screen: UserProfile187131Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
