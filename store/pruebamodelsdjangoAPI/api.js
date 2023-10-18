import axios from "axios"
const pruebamodelsdjangoAPI = axios.create({
  baseURL: "https://pruebamodelsdjango-44020.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return pruebamodelsdjangoAPI.get(`/api-docs/schema/`, {
    params: { lang: payload.lang }
  })
}
function api_v1_empresa_list(payload) {
  return pruebamodelsdjangoAPI.get(`/api/v1/empresa/`)
}
function api_v1_empresa_create(payload) {
  return pruebamodelsdjangoAPI.post(`/api/v1/empresa/`, payload)
}
function api_v1_empresa_retrieve(payload) {
  return pruebamodelsdjangoAPI.get(`/api/v1/empresa/${payload.id}/`)
}
function api_v1_empresa_update(payload) {
  return pruebamodelsdjangoAPI.put(`/api/v1/empresa/${payload.id}/`, payload)
}
function api_v1_empresa_partial_update(payload) {
  return pruebamodelsdjangoAPI.patch(`/api/v1/empresa/${payload.id}/`, payload)
}
function api_v1_empresa_destroy(payload) {
  return pruebamodelsdjangoAPI.delete(`/api/v1/empresa/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return pruebamodelsdjangoAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return pruebamodelsdjangoAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return pruebamodelsdjangoAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return pruebamodelsdjangoAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return pruebamodelsdjangoAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return pruebamodelsdjangoAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return pruebamodelsdjangoAPI.post(
    `/rest-auth/password/reset/confirm/`,
    payload
  )
}
function rest_auth_registration_create(payload) {
  return pruebamodelsdjangoAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return pruebamodelsdjangoAPI.post(
    `/rest-auth/registration/resend-email/`,
    payload
  )
}
function rest_auth_registration_verify_email_create(payload) {
  return pruebamodelsdjangoAPI.post(
    `/rest-auth/registration/verify-email/`,
    payload
  )
}
function rest_auth_user_retrieve(payload) {
  return pruebamodelsdjangoAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return pruebamodelsdjangoAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return pruebamodelsdjangoAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_empresa_list,
  api_v1_empresa_create,
  api_v1_empresa_retrieve,
  api_v1_empresa_update,
  api_v1_empresa_partial_update,
  api_v1_empresa_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
