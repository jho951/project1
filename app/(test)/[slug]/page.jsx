import React from "react";

export default async function TestPage({ params: { slug } }) {
  console.log(slug);
  return <div>{`${slug} 테스트 페이지입니다.`}</div>;
}
