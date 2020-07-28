import http from "@/commons/http";

const api = {
  login: "/login"
}

export function login() {
  return http.get(api.login);
}