/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // 서버에서 응답을 압축할지 여부
  compress: true, // true (기본값) || false
  // 리소스 요청의 CORS(Cross-Origin Resource Sharing) 정책 제어
  crossOrigin: "anonymous", // anonymous || use-credentials || undefined (기본값)
  // 사용자 정의 빌드 디렉토리에 사용할 이름을 지정
  distDir: "jhProject",
  // 환경변수 설정
  env: {
    API_URL: process.env.API_URL,
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // 경로에 접근 시 페이지 변경
  async redirects() {
    return [
      {
        source: "/redirect",
        destination: "/test/redirects",
        permanent: false, // true: 클라이언트/검색 엔진에 리디렉션을 영구적으로 캐시하도록 지시하는 308 상태 코드를 사용 || false: 307 임시 상태 코드를 사용해 캐시되지 않도록 한다.
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/rewrites", // 사용자가 접근하는 경로
        destination: "/test/rewrites", // 사용자 접근 경로에서 변경할 경로
      },
    ];
  },
  // eslint 적용
  eslint: {
    // 빌드 중 ESLint를 무시할지 여부를 설정합니다.
    ignoreDuringBuilds: false, // true||false
    // 특정 디렉토리를 ESLint 검사를 위해 지정할 수 있습니다.
    dirs: ["app", "public", "lib"], // 기본값 전체
    // 특정 경로에서만 ESLint 검사를 실행할 수 있습니다. (dirs와 같이 사용은 드뭄)
    // files: ["app/**/*.js", "app/**/*.jsx"],
  },
  // 애플리케이션 버전을 식별하기 위해 ID 생성
  generateBuildId: async () => {
    return process.env.BUILD_ID;
  },
  // HTTP ETag 생성 여부
  generateEtags: true, // true (기본값) || false
  // 실험적 기능 사용
  experimental: {
    instrumentationHook: false, // true || false
    //웹 바이탈(Web Vitals) 지표를 수집
    // webVitalsAttribution: ["CLS", "LCP", "FID"],
  },
  // 페이지가 필요할 때만 로드되도록 설정하는 기능
  onDemandEntries: {
    // 페이지가 메모리에 유지되는 최대 시간(밀리초)
    maxInactiveAge: 25 * 1000,
    // 동시에 유지될 수 있는 페이지의 최대 수
    pagesBufferLength: 2,
  },
  // 타입스크립트 빌드 오류 허용
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
