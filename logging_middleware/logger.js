require("dotenv").config();

const axios = require("axios");

const BASE_URL = "http://4.224.186.213/evaluation-service";

async function Log(stack, level, pkg, message) {

    try {

        const response = await axios.post(
            `${BASE_URL}/logs`,
            {
                stack,
                level,
                package: pkg,
                message
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.AUTH_TOKEN}`
                }
            }
        );

        console.log("SUCCESS:", response.data);

        return response.data;

    } catch (error) {

        console.log("STATUS:", error.response?.status);

        console.log("DATA:", error.response?.data);

        console.log("ERROR:", error.message);
    }
}

module.exports = Log;