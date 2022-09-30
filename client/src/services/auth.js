import { http } from "./htpp";

export const signIn = async (form) => {
  try {
    const response = await fetch(`${http}auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getProfile = async () => {
  try {
    const response = await fetch(`${http}auth/me`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    const resJson = await response?.json();
    return resJson;
  } catch (error) {
    return;
  }
};

export const logOut = async () => {
  try {
    const response = await fetch(`${http}auth/logout`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
