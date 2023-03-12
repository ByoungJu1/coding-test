// https://school.programmers.co.kr/learn/courses/30/lessons/42579#

function solution(genres, plays) {
  const table = new Map();

  // 가장 많이 재생된 장르
  // 많이 재생된 횟수 최대 2개
  // 인덱스번호로 출력

  genres.forEach((v, idx) => {
    const data = table.get(v) || { total: 0, songs: [] };

    table.set(v, {
      total: data.total + plays[idx],
      // 최대 두개까지 장르별 노래리스트를 가져와보자 ok
      // 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
      // 정렬 과정에서 분별해야할까?
      songs: [[plays[idx], idx], ...data.songs]
        .sort((a, b) => (b[0] === a[0] ? -1 : b[0] - a[0]))
        .slice(0, 2),
    });
  });

  return [...table.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((v) => v[1].songs)
    .map((v) => v[1]);
}

//주석제거
function solution(genres, plays) {
  const table = new Map();

  genres.forEach((v, idx) => {
    const data = table.get(v) || { total: 0, songs: [] };

    table.set(v, {
      total: data.total + plays[idx],
      songs: [[plays[idx], idx], ...data.songs]
        .sort((a, b) => (b[0] === a[0] ? -1 : b[0] - a[0]))
        .slice(0, 2),
    });
  });

  return [...table.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((v) => v[1].songs)
    .map((v) => v[1]);
}
