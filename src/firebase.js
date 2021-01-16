import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './firebaseConfig';
import store from './redux/store';

firebase.initializeApp(firebaseConfig);
firebase.database();

const rrfConfig = {
   userProfile: 'users'
};

const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch
}

export default rrfProps