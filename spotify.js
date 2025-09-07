export async function handler(event, context) {
  const query = event.queryStringParameters.query
  if (!query) {
    return { statusCode: 400, body: "Missing query" }
  }

  const url = `https://velyn.mom/api/spotify?apikey=RenzzXc&query=${encodeURIComponent(query)}`
  try {
    const res = await fetch(url)
    const data = await res.text()
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: data
    }
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ error: e.message }) }
  }
}
