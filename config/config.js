module.exports = {
  // prod
  environment: 'dev',
  database: {
      dbName: 'liu_sha_he',
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'root'
  },
  webhook: 'https://oapi.dingtalk.com/robot/send?access_token=97792668b68545b95a57cdc5cd784096776db86c27c87dcb18a15a2fa133085c'
}