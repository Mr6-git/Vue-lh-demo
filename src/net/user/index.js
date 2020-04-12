import httpServer from '../index'

export function login(data) {
  return httpServer({
    url: 'http://localhost:3000/questions',
    method: 'get',
    data
  })
}