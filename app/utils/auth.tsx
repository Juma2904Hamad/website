export const getToken = (): string | null => {
  if (typeof window === "undefined") return null;

  return (
    localStorage.getItem("token") ||
    sessionStorage.getItem("token")
  );
};

export const setToken = (
  token: string,
  rememberMe: boolean
): void => {
  if (rememberMe) {
    localStorage.setItem("token", token);
  } else {
    sessionStorage.setItem("token", token);
  }
};

export const removeToken = (): void => {
  localStorage.removeItem("token");
  sessionStorage.removeItem("token");
};