/** @type {import('next').NextConfig} */

const API_KEY = process.env.API_KEY;

const nextConfig = {
    reactStrictMode: true,
    async redirects() { // url 낚아채서 보이게 바꿈!
        return [
            {
                source: "/contact/:path*", // 이렇게 입력하면
                destination: "/form/:path*", // 여기 페이지로 보내기
                permanent: false, // 영구적인지? 브라우저or검색엔진이 기억할지 여부
            },
        ];
    },
    async rewrites() { // url 낚아채서 몰래 바꿈!(기존 주소가 보임)
        return [
            {
                source: "/api/movies",
                destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}` // 유저한테 안보임!
            },
            {
                source: "/api/movies/:id", // id를 가지고 이렇게 들어오면
                destination: `https://api.themoviedb.org/3/movie/:id?api_key=${API_KEY}` // id를 붙이고 이걸로 보여주기!
            }
        ]
    }
};

module.exports = nextConfig

