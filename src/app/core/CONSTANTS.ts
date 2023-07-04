const environmentLocal = {
  url: 'http://localhost:3000',
  api: '/users'
}

const environmentDevelop = {
  url: 'http://localhost:3000',
  api: '/users'
}

const environmentProd = {
  url: 'http://localhost:3000',
  api: '/users'
}

const env = {
  ...environmentLocal,
  // ...environmentDevelop,
  // ...environmentProd,
}

export const appSettings = {
  apiUrl: env.url + env.api,
};
