import {AppTheme} from '@FocusWorld/Theme';
import {useTheme} from 'react-native-paper';

import useMainStore from './useMainStore';
import useFirebaseAuth from './useFirebaseAuth';

const useAppTheme = () => useTheme<AppTheme>();

export {useAppTheme, useMainStore, useFirebaseAuth};
