const axios = require('axios');
exports.handler = async (event, ctx, callback) => {
  console.log('function menus ran');

  console.log('EVENT: ', event);

  const encodedMenus = encodeURIComponent(event.queryStringParameters.menus);

  console.log('encodedMenus lalala: ', encodedMenus);

  // console.log('encodedMenus: ', encodedMenus);

  try {
    const { data, status } = await axios({
      url: `https://dietlyprod001front.herokuapp.com/api/open/company-details/afterfit/menus?searchCriteria=${encodedMenus}`,
      // url: `https://dietlyprod001front.herokuapp.com/api/open/company-details/afterfit/menus?searchCriteria=%7B%22dietId%22%3A4%2C%22dates%22%3A%5B%222021-09-20%22%2C%222021-09-21%22%2C%222021-09-22%22%2C%222021-09-23%22%2C%222021-09-24%22%2C%222021-09-25%22%2C%222021-09-26%22%2C%222021-09-27%22%2C%222021-09-28%22%2C%222021-09-29%22%5D%7D`,
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
