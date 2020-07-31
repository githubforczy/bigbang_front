import http from "@/commons/http";

const api = {
  getArticle: "/anon/article"
}

export function articles() {
  return http.get(api.getArticle);
}

export function getArticle(id) {
  return http.get(`${api.getArticle}/${id}`);
}