import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Qualtrics from "react-native-qualtrics";
import { STAR_INTERCEPT_ID, BOOLEAN_INTERCEPT_ID, SURVEY_PROMT_INTERCEPT_ID, SURVEY_NOTIFICATION_INTERCEPT_ID } from "../utils";

const Home = () => {
    const starFeedback = () => {
        setTimeout(() => {
            try {
                Qualtrics.evaluateIntercept(STAR_INTERCEPT_ID, async resp => {
                    if (resp.passed) {
                        var intercept = await Qualtrics.displayIntercept(STAR_INTERCEPT_ID);
                        console.log(resp)
                    } else {
                        console.log('purchase intercept failed:', resp);
                    }
                });
            } catch (error) {
                alert(JSON.stringify(error))
            }
        }, 500);
    }

    const startSurveyPrompt = () => {
        setTimeout(() => {
            Qualtrics.evaluateIntercept(SURVEY_PROMT_INTERCEPT_ID, async resp => {
                if (resp.passed) {
                    var intercept = await Qualtrics.displayIntercept(SURVEY_PROMT_INTERCEPT_ID);
                } else {
                    console.log('Survey intercept failed:', resp);
                }
            });
        }, 500);
    }
    const startSurveyNotification = () => {
        setTimeout(() => {
            Qualtrics.evaluateIntercept(SURVEY_NOTIFICATION_INTERCEPT_ID, async resp => {
                if (resp.passed) {
                    var intercept = await Qualtrics.displayIntercept(SURVEY_NOTIFICATION_INTERCEPT_ID);
                } else {
                    console.log('Survey intercept failed:', resp);
                }
            });
        }, 500);
    }
    const yesNoFeedback = () => {
        setTimeout(() => {
            Qualtrics.evaluateIntercept(BOOLEAN_INTERCEPT_ID, async resp => {
                if (resp.passed) {
                    var intercept = await Qualtrics.displayIntercept(BOOLEAN_INTERCEPT_ID);
                } else {
                    console.log('Survey intercept failed:', resp);
                }
            });
        }, 1000);
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => startSurveyPrompt()} style={styles.btnContainer}>
                <Text style={styles.textStyle}>Start Survey (Prompt)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => startSurveyNotification()} style={styles.btnContainer}>
                <Text style={styles.textStyle}>Start Survey(Notification)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => starFeedback()} style={styles.btnContainer}>
                <Text style={styles.textStyle}>App Feedback (Emoji/Star)</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => yesNoFeedback()} style={styles.btnContainer}>
                <Text style={styles.textStyle}>App Feedback (Yes/No)</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Home;

const styles = StyleSheet.create({
    btnContainer: {
        padding: 15,
        borderWidth: 2,
        borderRadius: 30,
        borderColor: 'white',
        backgroundColor:'green',
        marginTop:10,
    },
    textStyle:{
      fontSize: 16,
      color:'white',
      fontWeight:'900'
    }
})