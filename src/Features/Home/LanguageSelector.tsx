import {I18nManager, StyleSheet, View, Pressable} from 'react-native';
import React, {useState} from 'react';
import {RadioButton} from 'react-native-paper';
import {Button, Text} from '@FocusWorld/Components';
import {useAppTheme} from '@FocusWorld/Hooks';
import {languageList} from '@FocusWorld/Constants';
import i18next from 'i18next';
import {isRrtLanguage} from '@FocusWorld/Utils';
import RNRestart from 'react-native-restart';
import {Icon} from 'react-native-paper';
import {useTranslation} from 'react-i18next';
import {StorageUtils} from '@FocusWorld/Storage';
import {StorageKey} from '@FocusWorld/types';

const LanguageSelector = () => {
  const CurrentLang = i18next.language;
  const [selectedLang, setSelectedLang] = useState(CurrentLang);
  const [expand, setExpand] = useState(false);
  const {colors} = useAppTheme();
  const {t} = useTranslation();

  const onPressUpdateLanguage = () => {
    const isRtl = isRrtLanguage(selectedLang);
    I18nManager.forceRTL(isRtl);
    StorageUtils.store(StorageKey.LANG, selectedLang);
    i18next.changeLanguage(selectedLang, () => RNRestart.restart());
  };

  if (!expand) {
    return (
      <View style={styles.mainContainer}>
        <Pressable
          onPress={() => setExpand(prev => !prev)}
          style={styles.showContainer}>
          <Text bold align="center">
            {t('changeLanguage')}
          </Text>
          <Pressable
            style={styles.chevIcon}
            onPress={() => setExpand(prev => !prev)}>
            <Icon source="chevron-up" size={30} />
          </Pressable>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <Pressable
          style={styles.chevIcon}
          onPress={() => setExpand(prev => !prev)}>
          <Icon source="chevron-down" size={30} />
        </Pressable>
        <RadioButton.Group
          onValueChange={value => setSelectedLang(value)}
          value={selectedLang}>
          <View style={styles.radioGroup}>
            {languageList.map(({key, language}) => (
              <View key={key} style={styles.radio}>
                <RadioButton.Android value={key} color="blue" />
                <Text>{language}</Text>
              </View>
            ))}
          </View>
        </RadioButton.Group>
        <Button
          disabled={CurrentLang === selectedLang}
          onPress={onPressUpdateLanguage}>
          <Text bold align="center" color={colors.white}>
            {t('update')}
          </Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'flex-end'},
  container: {
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  showContainer: {
    borderWidth: 0.5,
    padding: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  chevIcon: {
    alignItems: 'flex-end',
    position: 'absolute',
    right: 0,
    top: 4,
  },
  radioGroup: {flexDirection: 'row', flexWrap: 'wrap'},
  radio: {flexDirection: 'row', alignItems: 'center', marginHorizontal: 12},
});

export default React.memo(LanguageSelector);
