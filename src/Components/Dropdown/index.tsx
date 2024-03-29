import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';

import {Dropdown as ElDropdown} from 'react-native-element-dropdown';

import Entypo from 'react-native-vector-icons/dist/Entypo';
import {useAppTheme} from '@FocusWorld/Hooks';
import {AppTheme} from '@FocusWorld/Theme';
import {useTranslation} from 'react-i18next';

type DATA = {
  label: string;
  value: string;
};

type DropdownType = {
  defaultSelected: string;
  data: DATA;
  renderItem?: (item: DATA, selected?: boolean) => React.JSX.Element;
  onChange?: (v: string) => void;
  activeColor?: string;
  isError?: boolean;
};

const Dropdown = (props: DropdownType) => {
  const [value, setValue] = useState(null);
  const {t} = useTranslation();

  const {
    renderItem,
    data,
    onChange,
    activeColor,
    isError,
    defaultSelected,
    ...rest
  } = props;

  const {colors} = useAppTheme();
  const styles = getStyles(colors, isError);

  const _onChange = (item: DATA) => {
    setValue(item.value);
    onChange && onChange(item?.value);
  };

  return (
    <View style={styles.container}>
      <ElDropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        onChange={_onChange}
        maxHeight={300}
        activeColor={activeColor}
        labelField="label"
        valueField="value"
        placeholder={t('selectCountry')}
        value={value || defaultSelected}
        containerStyle={styles.containerStyle}
        renderItem={renderItem}
        renderLeftIcon={() => (
          <Entypo style={styles.icon} name="globe" size={24} />
        )}
        {...rest}
      />
    </View>
  );
};

const getStyles = (color: AppTheme['colors'], isError: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: color.white,
      paddingVertical: 12,
      paddingHorizontal: 0,
    },
    dropdown: {
      height: 55,
      borderWidth: 1,
      borderRadius: 12,
      paddingHorizontal: 8,
      paddingVertical: 24,
      borderColor: isError ? color.danger : color.black,
      backgroundColor: '#f0f0f0',
    },
    icon: {
      marginRight: 16,
    },
    label: {
      position: 'absolute',
      backgroundColor: color.white,
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color: 'gray',
    },
    selectedTextStyle: {
      fontSize: 16,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    containerStyle: {
      marginTop: 4,
      borderRadius: 12,
      paddingHorizontal: 4,
      paddingVertical: 12,
    },
  });

export default Dropdown;
