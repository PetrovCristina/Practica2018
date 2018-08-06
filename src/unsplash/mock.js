import get from 'lodash/get'
import set from 'lodash/set'

export function mock(unsplash, functionPath, data) {
  const oldFunction = get(unsplash, functionPath)

  set(unsplash, functionPath, function() {
    return oldFunction.apply(this, arguments).then(res => {
      const limit = res.headers.get('x-ratelimit-remaining')
      if (parseInt(limit, 10) === 0) {
        return new Response(JSON.stringify(data), {
          headers: res.headers
        })
      }
      return res
    })
  })
}
