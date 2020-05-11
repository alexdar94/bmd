import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyDQVBVjBzda4M39b9LBFXj1Aevlb1QWgrU',
  authDomain: 'bending-moment-diagram-ntu.firebaseapp.com',
  databaseURL: 'https://bending-moment-diagram-ntu.firebaseio.com',
  projectId: 'bending-moment-diagram-ntu',
  storageBucket: 'bending-moment-diagram-ntu.appspot.com',
  messagingSenderId: '112008271233',
  appId: '1:112008271233:web:52c31f3100220efe484480',
  measurementId: 'G-Y1LV0CDFQH',
};

// Initialize Firebase
const f = firebase.initializeApp(firebaseConfig);

export const analytics = f.analytics();
export default f;
