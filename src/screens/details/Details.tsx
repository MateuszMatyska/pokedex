import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Details: {id: string};
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Details'>;

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Details'
>;

type Props = {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
};

const Details: React.FC<Props> = (props) => {
  const {id} = props.route.params;
  return (
    <SafeAreaView>
      <View>
        <Text>Details</Text>
        <Text>{id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Details;
