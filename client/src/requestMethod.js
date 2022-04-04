import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZmU5NDgxNGJmZDdjMWNiZmVlNTFlOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NTU4NjU1OSwiZXhwIjoxNjQ1NjcyOTU5fQ.A6vrb1JCV1hEJMaiBayrT2tyEKS4d6f3zQ5nFnNkAQs"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
})
