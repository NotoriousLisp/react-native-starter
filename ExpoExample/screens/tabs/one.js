import React, { useEffect } from 'react';
import { Flex, Text } from 'app/components/primitives';
import ThemePicker from 'app/components/theme.picker';
import { useThemeContext } from '../../state/theme.state';

export default function TabOne({ navigation }) {
  const [theme] = useThemeContext();
  useEffect(() => {
    navigation.setOptions({
      title: `Tab One`
    });
  }, []);

  return (
    <Flex flex={1} column alignItems='center' justifyContent='center'>
      <Flex flex={1} justifyContent='center' alignItems='center'>
        <Text color={theme.accent} size={34}>
          Tab One
        </Text>
      </Flex>
      <Flex
        flex={0}
        column
        justifyContent='flex-end'
        alignItems='stretch'
        alignSelf='stretch'
        style={{ paddingVertical: 30 }}
      >
        <ThemePicker />
      </Flex>
    </Flex>
  );
}
