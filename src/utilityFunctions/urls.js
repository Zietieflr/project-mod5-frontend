const urls = {
  users: "https://o-tock.herokuapp.com//users/",
  login: "https://o-tock.herokuapp.com//login/",
  schedules: "https://o-tock.herokuapp.com//schedules/"
}

export default function url(key) {
  return urls[key]
}