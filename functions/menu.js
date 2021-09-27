const axios = require('axios');
exports.handler = async menusy => {
  console.log('function menus ran');

  console.log('menus: ', menusy);

  try {
    const { data, status } = await axios({
      url: `https://dietlyprod001front.herokuapp.com/api/open/company-details/afterfit/menus?searchCriteria=${menusy}`,
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
