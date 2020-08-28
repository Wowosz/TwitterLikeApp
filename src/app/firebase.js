import * as firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyApj_GPa76JUAAsa9K2IJXMizuXzjPO58s",
    authDomain: "social-9412c.firebaseapp.com",
    databaseURL: "https://social-9412c.firebaseio.com",
    projectId: "social-9412c",
    storageBucket: "social-9412c.appspot.com",
    messagingSenderId: "261462853560",
    appId: "1:261462853560:web:6f4f13deac402bfa1cb14d",
    measurementId: "G-NJYTBG13FZ"
}

const fire = firebase.initializeApp(config)
export const db = fire.firestore()

export default fire