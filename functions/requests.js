exports.handler = async () => {
  console.log('function ran');

  const data = { dietName: 'Paleo', price: 50, dietTag: 'PALEO' };

  //return response to browser
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
