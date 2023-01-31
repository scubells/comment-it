//Make this a custom hook?
import axios from "axios";

const REACT_APP_COHERE_API_KEY = process.env.REACT_APP_COHERE_API_KEY;

export const getCohereResult = async (comment) => {
  const options = {
    method: "POST",
    url: "https://api.cohere.ai/generate",
    headers: {
      accept: "application/json",
      "Cohere-Version": "2022-12-06",
      "content-type": "application/json",
      authorization: `Bearer QXz5QlvCsCMwzGdctrXCXU1UfgGtXo215Y8dk2nV`,
    },
    data: {
      max_tokens: 20,
      return_likelihoods: "NONE",
      truncate: "END",
      prompt: comment,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
