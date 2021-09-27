const axios = require('axios');

exports.handler = async () => {
  const BRAND_NAME = 'mojcatering';

  try {
    const { data, status } = await axios({
      url: `https://dietlyprod001front.herokuapp.com/api/open/company-details/${BRAND_NAME}/dietDetails`,
      headers: {
        'api-key': '123',
        'company-id': BRAND_NAME,
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
