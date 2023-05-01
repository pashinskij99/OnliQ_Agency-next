import { baseInstanceAxios } from '../api/baseInstanceAxios'

export const PostUserData = {
  async postUserData (data) {
    return baseInstanceAxios.post('/index.php', data)
  }
}