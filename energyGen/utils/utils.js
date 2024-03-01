const axios = require('axios')
const api = axios.create({
  baseURL: 'https://api.carbonintensity.org.uk',
});

exports.currentIntensity = async () => {
  try {
    const response = await api.get('/intensity')
    return response.data.data[0].intensity
  } catch (error) {
    console.log(error)
  }
}

exports.todayIntensity = async () => {
  const response = await api.get('/intensity/date')
  // console.log(response.data.data)
  return response.data.data
}
