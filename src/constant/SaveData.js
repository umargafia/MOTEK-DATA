import * as SecureStore from 'expo-secure-store';

// Function to encrypt and save data to device storage
export const saveEncryptedData = async (response, password) => {
  try {
    await SecureStore.setItemAsync('visited', 'true');
    return true;
  } catch (error) {
    return false;
  }
};

// Function to retrieve and decrypt data from device storage
export const getEncryptedData = async () => {
  try {
    const dataAsString = await SecureStore.getItemAsync('visited');

    if (dataAsString) return dataAsString;

    return null;
  } catch (error) {
    // Handle error here
    return null;
  }
};
