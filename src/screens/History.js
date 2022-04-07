import {View, Text, FlatList} from 'react-native';
import React from 'react';
import database from '@react-native-firebase/database';

const History = () => {
  const [list, setList] = React.useState(null);
  React.useEffect(() => {
    getdata();
  }, []);


  // this function will get the data from firebase realtime database 
  const getdata = async () => {
    try {
      const data = await database()
        .ref('users')
        .on('value', tempdata => {
          console.log(tempdata.val());
          setList(tempdata.val());
        });
      // console.log(data);
      // setList(data.val());
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <View>
      <Text style={{fontSize: 24, fontWeight: '500', textAlign: 'center',marginTop:'5%'}}>
        My Realtime location History
      </Text>
      <FlatList
        scrollEnabled
        refreshing={false}
        onRefresh={() => getdata()}
        data={list}
        renderItem={item => {
          if (item.item !== null) {
            return (
              <View
                style={{
                  backgroundColor: 'white',
                  borderWidth: 1,
                  borderRadius: 10,
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: '50%',
                  padding: '6%',
                }}>
                <Text style={{fontSize: 20}}>
                  Latitude: {item.item.latitude}
                </Text>
                <Text style={{fontSize: 20}}>
                  Longitude: {item.item.longitude}
                </Text>
              </View>
            );
          }
        }}
      />
    </View>
  );
};

export default History;
