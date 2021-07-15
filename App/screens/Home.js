import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Qualtrics from "react-native-qualtrics";
const Home = () => {

    useEffect(async () => {

    }, []);

    const showRating = () => {
        setTimeout(() => {
            try {
                Qualtrics.evaluateIntercept('SI_0MKDlgd9riEXXmu', async resp => {
                    if (resp.passed) {
                        var intercept = await Qualtrics.displayIntercept('SI_0MKDlgd9riEXXmu');
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
            Qualtrics.evaluateIntercept('SI_esNSJK9QsLmD8Q6', async resp => {
                if (resp.passed) {
                    var intercept = await Qualtrics.displayIntercept('SI_esNSJK9QsLmD8Q6');
                } else {
                    console.log('Survey intercept failed:', resp);
                }
            });
        }, 500);
    }
    const startSurveyNotification = () => {
        setTimeout(() => {
            Qualtrics.evaluateIntercept('SI_9tvgaNWYOdricEC', async resp => {
                if (resp.passed) {
                    var intercept = await Qualtrics.displayIntercept('SI_9tvgaNWYOdricEC');
                } else {
                    console.log('Survey intercept failed:', resp);
                }
            });
        }, 500);
    }
    const yesNoFeedback = () => {
        setTimeout(() => {
            Qualtrics.evaluateIntercept('SI_8lceMYfXPRwz6qq', async resp => {
                if (resp.passed) {
                    var intercept = await Qualtrics.displayIntercept('SI_8lceMYfXPRwz6qq');
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
            <TouchableOpacity onPress={() => showRating()} style={styles.btnContainer}>
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