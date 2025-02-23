import env from "dotenv";
env.config();

const API_URL = process.env.SECRETS_API_URL;

const ourUsername = process.env.SECRETS_API_USERNAME;
const ourPassword = process.env.SECRETS_API_PASSWORD;
const ourAPIKey = process.env.SECRETS_API_KEY;
const ourBearerToken = process.env.SECRETS_API_BEARER_TOKEN;

const getHomePage = (req, res) => {
    res.render("index.ejs", { content: "API Response..." });
}

const getNoAuth = async (req, res) => {
    //We use axios to hit up the /random endpoint
    //The data we get back should be sent to the ejs file as "content"
    //We also use JSON.stringify to turn the JS object from axios into a string.
    try {
        const response = await axios.get(`${API_URL}/random`);
        const result = response.data;
        let stringResult = JSON.stringify(result);
        res.render("index.ejs", { content: stringResult });
    } catch (error) {
        console.error(error.message);
    }
}

const getBasicAuth = async (req, res) => {
    //To demonstrate Basic Auth, We hit up the /all endpoint
    //We use a query parameter to specify that we only want the secrets from page 2

    try {
        const response = await axios.get(`${API_URL}/all?page=2`, {
            auth: {
                username: ourUsername,
                password: ourPassword,
            },
        });
        const result = response.data;
        let stringResult = JSON.stringify(result);
        res.render("index.ejs", { content: stringResult });
    } catch (error) {
        console.error(error.message);
    }
}

const getApiKeyAuth = async (req, res) => {
    //To demonstrate the API key method, we hit up the /filter endpoint
    //We use query parameter to filter for all secrets with an embarassment score of 5 or greater
    //We also ensure to provide a query parameter of apiKey in the request.

    try {
        const response = await axios.get(
            `${API_URL}/filter?score=5&apiKey=${ourAPIKey}`
        );
        const result = response.data;
        let stringResult = JSON.stringify(result);
        res.render("index.ejs", { content: stringResult });
    } catch (error) {
        console.error(error.message);
    }
}

const getBearerTokenAuth = async (req, res) => {
    //Here we hit up the /secrets/{id} endpoint to demostrate bearerToken method
    //and get the secret with id of 42 as the path parameter.

    try {
        const response = await axios.get(`${API_URL}/secrets/42`, {
            headers: {
                Authorization: `Bearer ${ourBearerToken}`,
            },
        });
        const result = response.data;
        let stringResult = JSON.stringify(result);
        res.render("index.ejs", { content: stringResult });
    } catch (error) {
        console.error(error.message);
    }
}