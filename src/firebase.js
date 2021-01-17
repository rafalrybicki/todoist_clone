import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { firebaseConfig } from './firebaseConfig';
import store from './redux/store';

firebase.initializeApp(firebaseConfig);
firebase.database();

const rrfConfig = {
   userProfile: 'users',
   profileFactory: (userData, profileData, firebase) => {
      const obj = {}

      if (userData.displayName) {
         obj.displayName = userData.displayName;
         obj.id = userData.uid;
         obj.email = userData.email;
      } else {
         obj.id = userData.user.uid;
         obj.email = userData.user.email;
      }

      return obj
   }
};

const rrfProps = {
   firebase,
   config: rrfConfig,
   dispatch: store.dispatch
}

export default rrfProps