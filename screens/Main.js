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
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

import * as Permissions from "expo-permissions";

import * as FaceDetector from 'expo-face-detector';
import { Camera } from 'expo-camera';

import Filter1 from './Filter1'
import styles from '../styles'

let data = {
    crown: [{
        "id": "1",
        "image": require('../assets/crown-pic1.png'),
    },
    {
        "id": "2",
        "image": require('../assets/crown-pic2.png'),
    },
    {
        "id": "3",
        "image": require('../assets/crown-pic3.png'),
    }],

    "flower": [{
        "id": "4",
        "image": require('../assets/flower-pic1.png'),
    },
    {
        "id": "5",
        "image": require('../assets/flower-pic2.png'),
    },
    {
        "id": "6",
        "image": require('../assets/flower-pic3.png'),
    },
    ],

    "hair": [
        {
            "id": "7",
            "image": require('../assets/hair-pic1.png'),
        },
    ],
    "hat": [
        {
            'id': "8",
            "image": require("../assets/hat-pic1.png")
        }
    ],
}

export default class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasCameraPermission: null,
            faces: [],
            current_filter: "Filter_1",
            selected: 'hat',
        }
        this.onCameraPermission = this.onCameraPermission.bind(this)
        this.onFacesDetected = this.onFacesDetected.bind(this)
        this.onFaceDetectionError = this.onFaceDetectionError.bind(this)
    }

    componentDidMount() {
        Permissions
            .askAsync(Permissions.CAMERA)
            .then(this.onCameraPermission)
    }

    onCameraPermission({ status }) {
        this.setState({ hasCameraPermission: status === 'granted' })
    }

    onFacesDetected({ faces }) {
        this.setState({ faces: faces })
        // console.log(faces)
    }

    onFaceDetectionError(error) {
        // console.log(error)
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View><Text>no</Text></View>
        }
        if (hasCameraPermission === false) {
            return (
                <View style={styles.container}>
                    <Text>No access to camera</Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                {/* {console.log(this.state.current_filter)} */}
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.headingContainer}>
                    <Text style={styles.titleText}>Look Me...</Text>
                </View>
                <View style={styles.cameraStyle}>
                    <Camera
                        style={{ flex: 1 }}
                        type={Camera.Constants.Type.front}
                        faceDetectorSettings={{
                            mode: FaceDetector.FaceDetectorMode.fast,
                            detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
                            runClassifications: FaceDetector.FaceDetectorClassifications.all
                        }}
                        onFacesDetected={this.onFacesDetected}
                        onFacesDetectionError={this.onFacesDetectionError}
                    />
                    {
                        this.state.faces.map(face => {
                            if (this.state.current_filter == "Filter_1") return <Filter1 face={face} src={require('../assets/crown-pic1.png')} />
                            else if (this.state.current_filter == "Filter_2") return <Filter1 face={face} src={require('../assets/crown-pic2.png')} />
                            else if (this.state.current_filter == "Filter_3") return <Filter1 face={face} src={require('../assets/crown-pic3.png')} />
                            else if (this.state.current_filter == "Filter_4") return <Filter1 face={face} src={require('../assets/flower-pic1.png')} />
                            else if (this.state.current_filter == "Filter_5") return <Filter1 face={face} src={require('../assets/flower-pic2.png')} />
                            else if (this.state.current_filter == "Filter_6") return <Filter1 face={face} src={require('../assets/flower-pic3.png')} />
                            else if (this.state.current_filter == "Filter_7") return <Filter1 face={face} src={require('../assets/hair-pic1.png')} />
                            else if (this.state.current_filter == "Filter_8") return <Filter1 face={face} src={require('../assets/hat-pic1.png')} />
                        })
                    }
                </View>
                <View style={styles.frameContainer}>
                    <View style={styles.cateogaryContainer}>

                        <TouchableOpacity style={
                            this.state.selected === "hat" ? (styles.cateogaryBoxSelected) : (styles.cateogaryBox)}
                            onPress={() => {
                                this.setState({ selected: 'hat' })
                            }}
                        >
                            <Text>Hat</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={
                            this.state.selected === "hair" ? (styles.cateogaryBoxSelected) : (styles.cateogaryBox)}
                            onPress={() => {
                                this.setState({ selected: 'hair' })
                            }}
                        >
                            <Text>Hair</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={
                            this.state.selected === "flower" ? (styles.cateogaryBoxSelected) : (styles.cateogaryBox)}
                            onPress={() => {
                                this.setState({ selected: 'flower' })
                            }}
                        >
                            <Text>Flower</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={
                            this.state.selected === "crown" ? (styles.cateogaryBoxSelected) : (styles.cateogaryBox)}
                            onPress={() => {
                                this.setState({ selected: 'crown' })
                            }}
                        >
                            <Text>Crown</Text>
                        </TouchableOpacity>
                    </View>
                    <ScrollView
                        style={{ flexDirection: 'row' }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {
                            data[this.state.selected].map(filter_data => {
                                return (
                                    <TouchableOpacity style={styles.filterImageContainer}
                                        onPress={() => {
                                            this.setState({
                                                current_filter: `Filter_${filter_data.id}`
                                            })
                                        }}
                                    >
                                        <Image
                                            source={filter_data.image}
                                            style={{ width: 80, height: 32 }}
                                        ></Image>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}
