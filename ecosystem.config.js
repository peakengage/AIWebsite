module.exports = {
  apps: [
    {
      name: "peakengage",
      cwd: ".next/standalone",
      script: "server.js",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
        HOSTNAME: "0.0.0.0",
      },
      instances: 1,
      exec_mode: "fork",
      max_memory_restart: "512M",
      restart_delay: 5000,
      max_restarts: 10,
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      error_file: "/var/log/pm2/peakengage-error.log",
      out_file: "/var/log/pm2/peakengage-out.log",
      merge_logs: true,
    },
  ],
};
