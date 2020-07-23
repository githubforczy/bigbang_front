import http from "@/commons/http";

const api = {
  user_login: "/test/my_name"
}

export function userLogin() {
  return http.get(api.user_login);
}