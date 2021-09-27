const axios = require('axios');

exports.handler = async event => {
  const brandName = event.queryStringParameters.companyName;

  try {
    const { data, status } = await axios({
      url: `https://dietlyprod001front.herokuapp.com/api/open/company-details/${brandName}/dietCaloriesDetails`,
      headers: {
        'api-key': '123',
        'company-id': brandName,
      },
      withCredentials: true,
    });
    return {
      statusCode: status, // http status code
      body: JSON.stringify(data),
    };
  } catch (e) {
    console.log(`Failed to fetch data. Error message: ${e}`);
  }
};
