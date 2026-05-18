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

        return response.data;

    } catch (error) {

        console.error(
            error.response?.data || error.message
        );
    }
}

module.exports = Log;