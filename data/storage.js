import AsyncStorage from "@react-native-async-storage/async-storage";

const setItem = async (key, item) => {
  const res = JSON.stringify(item);
  await AsyncStorage.setItem(key, res);
  return res;
};

const getItem = async (key) => {
  console.log("1");
  const rawData = await AsyncStorage.getItem(key);
  console.log("2");
  const item = JSON.parse(rawData);
  console.log("3");
  return item;
};

export const Storage = { setItem, getItem };
