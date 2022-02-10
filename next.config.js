module.exports = () => {
  return {
    reactStrictMode: true,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    env: {
      GOOGLE_CLIENT_ID:
        "334774191903-42e62uvovumcrmr0hl324o8edu3n15bs.apps.googleusercontent.com",
      GOOGLE_SECRET_KEY: "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",
      USER: "Deadpool",
      PASSWORD: "Deadpool",
      DATABASE: "Dashboard",
      apiKey: "AIzaSyCiZz65ZuP-eDSJglkgFjLyfmUI3RkCIc0",
      authDomain: "login-d4dde.firebaseapp.com",
      databaseURL: "https://login-d4dde-default-rtdb.firebaseio.com",
      projectId: "login-d4dde",
      storageBucket: "login-d4dde.appspot.com",
      messagingSenderId: "99120856004",
      appId: "1:99120856004:web:054b2d534dcab6d5c68291",
    },
  };
};
