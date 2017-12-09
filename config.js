module.exports = {
  // your community or team name to display on join page.
  community: process.env.COMMUNITY_NAME || 'Girl Develop It Boulder/Denver',
  // your slack team url (ex: socketio.slack.com)
  slackUrl: process.env.SLACK_URL || 'gdiboulder.slack.com',
  // access token of slack
  // You can generate it in https://api.slack.com/web#auth
  // You should generate the token in admin user, not owner.
  // If you generate the token in owner user, missing_scope error will be occurred.
  //
  // You can test your token via curl:
  //   curl -X POST 'https://YOUR-SLACK-TEAM.slack.com/api/users.admin.invite' \
  //   --data 'email=EMAIL&token=TOKEN&set_active=true' \
  //   --compressed
  slacktoken: process.env.SLACK_TOKEN || 'xoxp-2934062635-2934062637-266495641728-925821d9f057d277cce44a52394b6321',
  // an optional security measure - if it is set, then that token will be required to get invited.
  inviteToken: process.env.INVITE_TOKEN || null,

  locale: process.env.LOCALE || "en",

  meetup: process.env.MEETUP_URL || 'http://gdiboulder.com/join',
};
