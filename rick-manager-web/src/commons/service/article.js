import http from "@/commons/http";

const api = {
  edit: "/article/edit"
}

export function edit(articleEntity) {
  return http.post(api.edit, articleEntity);
}