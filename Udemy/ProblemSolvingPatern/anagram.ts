function anagram(word1: string, word2: string): boolean {
  if (word1.length !== word2.length) return false;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[word2.length - i - 1]) {
      return false;
    }
  }
  return true;
}
// const result1 = anagram("apple", "elppa");
const result1 = anagram("", "");

console.log(result1);
