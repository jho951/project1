/** @type {import('next').NextConfig} */
const nextConfig = {
  // 경로에 접근 시 페이지 변경
  async redirects() {
    return [
      {
        source: "/redirect", // 사용자가 접근하는 경로
        destination: "/", // 사용자 접근 경로에서 변경할 경로
        permanent: true, // true: 클라이언트/검색 엔진에 리디렉션을 영구적으로 캐시하도록 지시하는 308 상태 코드를 사용 || false: 307 임시 상태 코드를 사용해 캐시되지 않도록 한다.
      },
    ];
  },
};

export default nextConfig;
