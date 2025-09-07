export async function handler(event, context) {
  try {
    // Cek query param, misal ?track=hello
    const params = new URLSearchParams(event.queryStringParameters)
    const track = params.get("track") || "No track provided"

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        success: true,
        message: "Spotify API simulasi jalan",
        requested: track,
        timestamp: new Date().toISOString()
      })
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ success: false, error: err.message })
    }
  }
}
