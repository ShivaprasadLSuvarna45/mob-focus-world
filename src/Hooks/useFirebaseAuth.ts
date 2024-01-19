import auth from '@react-native-firebase/auth';
import useMainStore from './useMainStore';

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
  country: string,
) => {
  try {
    const data = await auth().createUserWithEmailAndPassword(email, password);

    const currentUser = auth().currentUser;

    if (currentUser) {
      await currentUser.updateProfile({
        displayName: userName,
      });

      return {
        success: true,
        data: {...currentUser.toJSON(), displayName: userName},
      };
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
  const {setUser, logout: dispatchLogout, setLoading} = useMainStore();

  const signOut = async () => {
    setLoading(true);
    const {success, data} = await userSignOut();

    if (success) {
      dispatchLogout();
    } else {
      setLoading(false);
      console.log('LOUT:ERROR', data); //setError to Store
    }
  };

  const login = async (email: string, password: string) => {
    setLoading(true);

    const {success, data} = await emailLogin(email, password);

    if (success) {
      setUser(data?.user);
    } else {
      setLoading(false);
      console.log('LOGIN:ERROR', data); //setError to Store
    }
  };

  const registration = async (
    userName: string,
    email: string,
    password: string,
    country: string,
  ) => {
    setLoading(true);
    const {success, data} = await userRegistration(
      userName,
      email,
      password,
      country,
    );
    if (success) {
      setUser(data);
    } else {
      setLoading(false);
      console.log('REGISTRATION:ERROR', data); //setError to Store
    }
  };

  return {login, signOut, registration};
};

export default useFirebaseAuth;

/*

   import firestore from '@react-native-firebase/firestore';

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


      const userDoc = firestore().collection('users').doc(currentUser.uid);

      await userDoc.set({
        userName,
        country: country,
      });
*/
