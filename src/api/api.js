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
  me() {
    return instance.get(`/auth/me`).then(response => response.data);
  },
  login(email, password, rememberMe) {
    return instance.post('auth/login', { email, password, rememberMe }).then(response => response.data);
  },
  logout() {
    return instance.delete('auth/login').then(response => response.data);
  }


}

export const profileApi = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`).then(response => response.data);
  },

  getStatus(userId) {
    return instance.get(`profile/status/${userId}`).then(response => response.data);
  },

  updateStatus(status) {
    return instance.put('profile/status', { status: status }).then(response => response.data);
  },

  savePhoto(file) {
    const formData = new FormData();
    formData.append("image", file);
    return instance.put('profile/photo', formData, {
      headers: {
        'Content-type': 'multipart/form-data'
      }
    }).then(response => response.data);
  },

  setProfileData(profile) {
    return instance.put('profile', profile).then(response => response.data)
  }
}

