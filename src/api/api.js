import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: {
    "API-KEY": "23cebb0e-751f-4abb-9499-dd7054d8a790"
  }
})

export const usersApi = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data);
  },
  follow(userId = 2) {
    return instance.post(`follow/${userId}`).then(response => response.data);
  },
  unfollow(userId = 2) {
    return instance.delete(`follow/${userId}`).then(response => response.data);
  }
}

export const loginApi = {
  login() {
    return instance.get(`/auth/me`).then(response => response.data);
  }
}

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`);
  },
  updateStatus(status) {
    return instance.put('profile/status', { status: status });
  }
}