const request = require("supertest")("https://fly.wordfinderapi.com/api/search");

//contains is formatted with the letter in the exact position and _ where the letter is uknown. example: he__o (hello)
//include_letters are letters we know are in the word but we dont know their position
//exclude_letters are letters we know are NOT in the word
const getWords = async (params) => {
  const url = `?word_sorting=points&dictionary=otcwl&length=5&contains=${params.contains}&include_letters=${params.included}&exclude_letters=${params.excluded}`;
  const response = await request.get(url);
  if (JSON.parse(await response.text)["word_pages"]) {
    return JSON.parse(await response.text)["word_pages"][0]["word_list"];
  }
};

exports.getWords = getWords;