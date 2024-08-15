export default {
  async rewrites() {
    return [
      {
        source: "/register",
        destination: "https://gtpbe.vercel.app/register",
      },
    ];
  },
};
