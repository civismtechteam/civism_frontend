const ENDPOINT = process.env.NODE_ENV === "production" ? "http://api.civism.world" : "http://localhost:8080/api"

export default ENDPOINT;
