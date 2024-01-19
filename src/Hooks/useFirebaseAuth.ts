import auth from '@react-native-firebase/auth';
import useMainStore from './useMainStore';
// import firestore from '@react-native-firebase/firestore';

const emailLogin = async (email: string, password: string) => {
  try {
    const data = await auth().signInWithEmailAndPassword(email, password);
    return {success: true, data};
  } catch (error) {
    return {success: false, data: error};
  }
};

const userRegistration = async (
  userName: string,
  email: string,
  password: string,
) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(email, password);

    const currentUser = auth().currentUser;

    // const usersCollection = firestore().collection('users');
    // usersCollection.doc(uid).set(
    //   {
    //     country: country,
    //   },
    //   {merge: true},
    // );

    /*
    usersCollection
      .doc(uid)
      .get()
      .then(doc => {
        if (doc.exists) {
          const userCountry = doc.data().country;
          console.log("User's Country:", userCountry);
        } else {
          console.log('User not found');
        }
      })
      .catch(error => {
        console.error('Error getting user information:', error);
      });
    */

    if (currentUser) {
      await currentUser.updateProfile({
        displayName: userName,
      });
      return {success: true, data};
    } else {
      return {success: false, data};
    }
  } catch (error) {
    return {success: false, data: error};
  }
};

const userSignOut = async () => {
  try {
    const data = await auth().signOut();
    return {success: true, data};
  } catch (error) {
    return {success: false, data: error};
  }
};

const useFirebaseAuth = () => {
  const {setUser, logout: dispatchLogout} = useMainStore();

  const signOut = () => {
    const {success, data} = userSignOut();
    if (success) {
      dispatchLogout();
    } else {
      console.log('LOUT:ERROR', data); //setError to Store
    }
  };

  const login = async (email: string, password: string) => {
    const {success, data} = await emailLogin(email, password);

    if (success) {
      setUser(data);
    } else {
      console.log('LOGIN:ERROR', data); //setError to Store
    }
  };

  const registration = async (
    userName: string,
    email: string,
    password: string,
  ) => {
    const {success, data} = await userRegistration(userName, email, password);
    if (success) {
      setUser(data);
    } else {
      console.log('REGISTRATION:ERROR', data); //setError to Store
    }
  };

  return {login, signOut, registration};
};

export default useFirebaseAuth;
