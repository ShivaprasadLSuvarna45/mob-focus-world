import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {Dropdown, Text} from '@FocusWorld/Components';
import {countryList} from '@FocusWorld/Constants';
import {useAppTheme} from '@FocusWorld/Hooks';
import {getFlag} from '@FocusWorld/Utils';
import {SizeVariant} from '@FocusWorld/types';

type CountrySelectorProps = {
  onChange?: (v: string) => void;
  isError?: boolean;
  defaultSelected?: string;
};

const CountrySelector = (props: CountrySelectorProps) => {
  const {onChange, isError, defaultSelected} = props;
  const {colors} = useAppTheme();
  const styles = getStyles(colors);

  const renderItem = (item: any, selected?: boolean) => (
    <View
      style={{...styles.itemContainer, ...(selected && styles.selectedItem)}}>
      <Image style={styles.flagImage} source={{uri: getFlag(item.value)}} />
      <Text size={SizeVariant.MD}>{item.label}</Text>
    </View>
  );

  return (
    <Dropdown
      data={countryList}
      defaultSelected={defaultSelected}
      renderItem={renderItem}
      activeColor={colors.white}
      onChange={onChange}
      isError={isError}
    />
  );
};

const getStyles = () =>
  StyleSheet.create({
    itemContainer: {
      flexDirection: 'row',
      marginVertical: 4,
      marginHorizontal: 12,
      paddingVertical: 8,
      paddingHorizontal: 8,
    },
    flagImage: {
      width: 36,
      height: 24,
      marginRight: 12,
      borderRadius: 4,
      resizeMode: 'cover',
    },
    selectedItem: {
      backgroundColor: '#f0f0f0',
      borderRadius: 8,
    },
  });

export default CountrySelector;
