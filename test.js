var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://www1-dev3-aws.amwaylive.com/restservice-sp/dms/config/affiliates/56/states-cities-postcodes?cntryCd=JP&postCd=3380837',
  headers: { 
    'Authorization': 'Bearer bd77fcfa-aca6-4e43-b7b6-8e5dfe881021', 
    'Cookie': '; awlvhtoken='
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
