import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    StatusBar,
    Platform,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { RFValue,RFPercentage } from 'react-native-responsive-fontsize';
import styles from '../styles';


export default class Introduction extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>Look Me...</Text>
                </View>

                {/* body text */}
                <View style={styles.bodyContainer}>
                    <View style={{flex:0.5}}>
                       <Text>Look Me is the best photo filter app for pic with the funny camera effects. With the stunning live photo filters directly on your face</Text>
                    </View>
                    <View style={{flex:0.25,flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <Image source={require('../assets/crown-pic1.png')} style={{width:125,height:50}}></Image>
                    </View>
                    <View style={{flex:0.5}}>
                        <Image source={require('../assets/flower-pic1.png')} style={{width:150,height:60}}></Image>
                    </View>
                    </View>

                    <View style={{flex:0.25,flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <Image source={require('../assets/hair-pic1.png')} style={{width:150,height:60}}></Image>
                    </View>
                    <View style={{flex:0.5}}>
                        <Image source={require('../assets/other-pic1.png')} style={{width:150,height:60}}></Image>
                    </View>
                    </View>

                    <View style={{flex:0.2, justifyContent:'center',alignItems:'center'}}>
                        <TouchableOpacity
                        style={styles.textTouchableOpacity}
                        onPress={()=>{
                            this.props.navigation.navigate('Main')
                        }}>
                            <Text style={{marginTop:10,}}>Try now!!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

