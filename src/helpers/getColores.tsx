import { getColor } from "react-native-image-dominant-color"

export const getImageColors = async (uri: string) => {
    return await getColor(uri);
  }