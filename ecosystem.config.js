module.exports = {
  apps: [
    {
      script: "./bin/www",
      node_args: ["-r", "@contrast/agent"],
      instances: "2",
      exec_mode: "cluster",
      watch: ".",
      env: {
        CONTRAST__API__URL: "https://teamserver-darpa.contsec.com/Contrast",
        CONTRAST__API__API_KEY: "ZAh358AglIay0wqDi5iCQr4Y75mFxwLY",
        CONTRAST__API__USER_NAME: "V1CDR2NFDKXJESVZM",
        CONTRAST__API__SERVICE_KEY: "agent_b47d609e-1971-4560-961c-a55bd4111b61@Alexstestorg",
      },
    },
  ],
};
