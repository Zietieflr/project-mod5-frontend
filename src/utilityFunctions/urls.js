const urls = {
  user: "http://localhost:8080/users/",
  login: "http://localhost:8080/login/",
  schedules: "http://localhost:8080/schedules/"
}

export default function url(key) {
  return urls[key]
}