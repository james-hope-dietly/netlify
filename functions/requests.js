const axios = require('axios');
exports.handler = async () => {
  console.log('function ran');

  try {
    const { data, status } = await axios({
      url: `https://dietlyprod001front.herokuapp.com/api/dietly/open/cities/all`,
      headers: {
        'api-key': '123',
        'company-id': 'afterfit',
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
