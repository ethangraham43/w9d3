const csrfToken = document.querySelector("meta[name=csrf-token]").content;


async function customFetch(url, options = {}) {
  options.headers = {
    "X-CSRF-Token": csrfToken,
    Accept: "application/json",
    ...options.headers
  };

  return await fetch(url, options);
}

export function followUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "post"})
}

export function unfollowUser(id) {
  return customFetch(`user_follow/users/${id}/follow`, {method: "delete"})
}
