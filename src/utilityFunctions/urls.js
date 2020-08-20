const urls = {
  users: "http://localhost:3000/users/",
  login: "http://localhost:3000/login/",
  schedules: "http://localhost:3000/schedules/"
}

export default function url(key) {
  return urls[key]
}