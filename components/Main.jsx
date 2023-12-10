import {  Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Main() {
    const isDarkMode = useColorScheme() === 'dark';
    const [showAnswer, setShowAnswer] = useState(false);
    
    const [riddle, setRiddle] = useState([]);

    useEffect(() => {
        getRiddle();
    }, [])

    const getRiddle = async () => {
        const riddleData = await fetch('https://riddles-by-api-ninjas.p.rapidapi.com/v1/riddles', {
            headers: {
                'X-RapidAPI-Key': '431a83f16cmshc1c8504e4f64fabp1a6fc3jsn58010b788785',
                'X-RapidAPI-Host': 'riddles-by-api-ninjas.p.rapidapi.com'
            }
        })
        const parsedRiddle = await riddleData.json();
        setRiddle(parsedRiddle[0])
        setShowAnswer(false)
    }

    const handleShowAnswer = () => {
        setShowAnswer(true);
    }
    const handleHideAnswer = () => {
        setShowAnswer(false);
    }
    const handleChangeQuestion = () => {
        getRiddle()
    }

    return (
        <View>
            <Text style={[isDarkMode ? styles.darkModeText : styles.lightModeText, styles.questionHeading]}>{riddle.title}</Text>

            <View style={styles.questionContainer}>
                <Text style={[isDarkMode ? styles.darkModeText : styles.lightModeText, styles.questionText]}>
                    {riddle.question}
                </Text>

            </View>
            <View style={styles.buttonsContainer}>
                {
                    showAnswer ?
                        <Pressable
                            onPress={handleHideAnswer}>
                            <View
                                style={[styles.Button]}

                            ><Text style={styles.buttonText}>Hide Answer</Text></View>
                        </Pressable> :

                        <Pressable
                            onPress={handleShowAnswer}>
                            <View
                                style={[styles.Button]}

                            ><Text style={styles.buttonText}>Show Answer</Text></View>
                        </Pressable>
                }
                <Pressable
                    onPress={handleChangeQuestion}
                >

                    <View style={styles.Button}>
                        <Text style={styles.buttonText}>Change Question</Text>
                    </View>

                </Pressable>
            </View>
            {
                showAnswer ?
                    <View style={styles.answerContainer}>
                        <Text style={[isDarkMode ? styles.darkModeText : styles.lightModeText, styles.answer]}>

                            {riddle.answer}
                        </Text>

                    </View> : ""
            }
        </View>
    )
}

const styles = StyleSheet.create({
    darkModeText: {
        color: '#c5cae9'
    },
    lightModeText: {
        color: '#3949ab'
    },
    questionHeading: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24,
        margin: 20
    },
    questionContainer: {
        width: '80%',
        alignSelf: 'center',
        margin: 20
    },
    questionText: {
        textAlign: 'center',
        fontSize: 18
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Button: {
        backgroundColor: "#b2ebf2",
        width: '45',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
        margin: 20
    },
    buttonText: {
        color: '#00acc1',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'

    },
    answerContainer: {
        alignSelf: 'center',
        width: '80%',
        borderRadius: 10,
        borderColor: 'gray',
        borderWidth: 2,
        padding: 10,
        margin: 20,
        shadowColor: '#ec407a',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowRadius: 10,
        shadowOpacity: 0.8
    },
    answer: {
        textAlign: 'center'
    },

})