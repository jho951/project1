import React from "react";

export default function TestPage({ params: { slug } }) {
  return (
    <div>{`${
      slug === "env" ? process.env.API_URL : slug
    } 테스트 페이지입니다.`}</div>
  );
}
