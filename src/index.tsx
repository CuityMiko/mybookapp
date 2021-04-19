import React from 'react';
import {Text, View} from 'react-native';
import {test} from '@/utils/index';

class App extends React.PureComponent {
  componentDidMount() {
    // eslint-disable-next-line jest/no-disabled-tests
    test();
  }
  render() {
    return (
      <View>
        <Text>App.tsx</Text>
      </View>
    );
  }
}

export default App;
