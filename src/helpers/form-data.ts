import { Platform } from "react-native";

export const createFormData = ({image, body}): FormData => {
  const data = new FormData();

  if (image) {
    data.append("image", image)
  }

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  })

  return data;
}