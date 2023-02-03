import axios from 'axios'

export function getPerson(id: string) {
  return axios({
    url: `http://www.breakingbadapi.com/api/characters/${id}`,
    // url: `https://www.breakingbadapi.com/api/characters/${id}`,
  })
}
