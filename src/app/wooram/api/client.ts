
const baseUrl = process.env.NEXT_PUBLIC_API_URL;
export const postData = async (title: string) => {
  const req = {
    title,
    author: "wooram"
  };
  const options = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body : ''
  }
  options.body = JSON.stringify(req);

  const res = await fetch(baseUrl + "/posts", options);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json();
}
