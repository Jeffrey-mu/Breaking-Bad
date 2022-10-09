import axios from 'axios'

export function getPerson(id: string) {
  return axios({
    url: `https://www.breakingbadapi.com/api/characters/${id}`,
  })
}
