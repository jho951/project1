/** @type {import('next').NextConfig} */
const nextConfig = {
  // 다른 페이지에 접근 시 basePath자동으로 적용
  basePath: "/test",
  // 서버에서 응답을 압축할지 여부
  compress: true, // true (기본값) || false
  // 리소스 요청의 CORS(Cross-Origin Resource Sharing) 정책 제어
  crossOrigin: "use-credentials ", // anonymous || use-credentials || undefined (기본값)
  // 경로에 접근 시 페이지 변경
  async redirects() {
    return [
      {
        source: "/redirect", // 사용자가 접근하는 경로
        destination: "/redirects", // 사용자 접근 경로에서 변경할 경로
        permanent: false, // true: 클라이언트/검색 엔진에 리디렉션을 영구적으로 캐시하도록 지시하는 308 상태 코드를 사용 || false: 307 임시 상태 코드를 사용해 캐시되지 않도록 한다.
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrite", // 사용자가 접근하는 경로
        destination: "/rewrites", // 사용자 접근 경로에서 변경할 경로
      },
    ];
  },
};

export default nextConfig;
