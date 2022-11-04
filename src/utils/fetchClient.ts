// Path: src\utils\fetchClient.ts
const fetchClient = (url: string, method?: string, token?:string, body?: any) => {
  const headers:any = {
    'Content-Type': 'application/json',
    'acccess-control-allow-origin': 'no-cors',
    // no referrer, no credentials, same-origin
    'Referrer': 'no-referrer',
  };
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  return fetch(url, {
    method: method || 'GET',
    headers,
    body: JSON.stringify(body),
  }).then((res) => res.json());
}

export default fetchClient;