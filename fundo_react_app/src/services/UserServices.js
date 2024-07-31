
import axios from "axios";

export const signIn = async (obj) => {
  let response = await axios.post(
    "https://fundoonotes.incubation.bridgelabz.com/api/user/login",
    obj
  );
  return response;
};

export const signUp = async (obj) => {
    let response = await axios.post(
      "https://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      obj
    );
    return response;
  };