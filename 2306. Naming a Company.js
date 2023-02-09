
const distinctNames = function (ideas) {
  const map = new Map();
  for (const s of ideas) {
    map.has(s[0])
      ? map.get(s[0]).add(s.slice(1))
      : map.set(s[0], new Set([s.slice(1)]));
  }
  let ans = 0, keys = [...map.keys()];
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      let [countI, countJ] = [0, 0];
      for (const k of map.get(keys[i])) {
        if (!map.get(keys[j]).has(k)) countI++;
      }
      for (const k of map.get(keys[j])) {
        if (!map.get(keys[i]).has(k)) countJ++;
      }
      ans += countI * countJ;
    }
  }
  return ans * 2;
};