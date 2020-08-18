export function getDelete(url, id) {
  return fetch(url + id, {
    method: "Delete",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
  })
}

export function boilerFetch(url, method, body) {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
}

export function login(url, body) {
  return fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body)
  }).then(response => response.json())
}