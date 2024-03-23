import React, { useState } from 'react';
import { ImageBackground, TouchableOpacity, View, Text, StyleSheet, Image, Modal } from 'react-native';
import Svg, { Circle,Path, Line } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient';

const BoothInfo = ({ navigation }) => {
  const [selectedPoint, setSelectedPoint] = useState(null);

  const handlePointPress = (point) => {
    setSelectedPoint(point);
  };

  const points = [
    { id: '1', top: '17%', left: '65%', info: 'Info about point 1' },
    { id: '2', top: '40%', left: 160, info: 'Info about point 2' },
    // Add more points as needed
  ];

  return (
    <View style={styles.container}>
        <ImageBackground source={require('./assets/background.png')} style={styles.imageBackground}>
        <View style={{flexDirection:'row', gap:170, marginTop:'5%'}}>
            <Text style={styles.header}>Level 1</Text>
            <TouchableOpacity  
                onPress={() => navigation.openDrawer()}
            >
            <Svg width="48" height="52" viewBox="0 0 48 52" fill="none">
                <LinearGradient
                    colors={['#D9D9D9', 'transparent']}
                    style={{ borderRadius: 24 }}
                >
                </LinearGradient>
                <Line x1="12" y1="16.5" x2="36" y2="16.5" stroke="#EBEBEF" />
                <Line x1="12" y1="24.5" x2="36" y2="24.5" stroke="#EBEBEF" />
                <Line x1="12" y1="32.5" x2="36" y2="32.5" stroke="#EBEBEF" />
            </Svg>
            </TouchableOpacity>
        </View>
    <View style={{marginTop:'5%'}}>
      <Image source={require('./assets/Level1.png')} style={{width:'100%', height:'55%'}} />
        {points.map((point) => (
          <TouchableOpacity
            key={point.id}
            onPress={() => handlePointPress(point)}
            style={{
                position: 'absolute',
                top: point.top,
                left: point.left,
                width: 10,
                height: 10,
                backgroundColor: 'black',
                borderRadius: 5,
            }}
          />
        ))}
      {selectedPoint ? (
        <View style={{ padding: 20, backgroundColor: 'white' }}>
          <Text>{`Point ${selectedPoint.id}`}</Text>
          <Text>{`More information about point ${selectedPoint.id}: ${selectedPoint.info}`}</Text>
        </View>
      ) : (
        <View style={{ padding: 20, backgroundColor: 'white' }}>
          <Text>Click on the black buttons to get more information for that area.</Text>
        </View>
      )}
    </View>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({ 
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageBackground: {
        width: '100%',
        height: '100%'
    },
    header: {
        color: '#EBEBEF',
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: 40,
        fontWeight: 'normal',
        marginLeft: '4%',
    },
    });

export default BoothInfo;






