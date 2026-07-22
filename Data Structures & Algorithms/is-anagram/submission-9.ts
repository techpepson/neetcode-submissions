class Solution {
  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   * It is important to note that Anagrams depend on the rule of duplicates, since we have to
   * make sure that the two strings repeat the same exact characters.
   * This means that when we create a set of the first string, the lenght should be the same as the size of the
   * set of the other.
   */
  isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let tmap = new Map();
    let smap = new Map();

    for (let i = 0; i < s.length; i++) {
      const tletter = t[i];
      const sletter = s[i];
      if (tmap.has(tletter)) {
        let value = tmap.get(tletter);
        const incremented = value + 1;
        tmap.set(tletter, incremented);
      } else {
        tmap.set(tletter, 1);
      }

      if (smap.has(sletter)) {
        let value = smap.get(sletter);
        let incremented = value + 1;
        smap.set(sletter, incremented);
      } else {
        smap.set(sletter, 1);
      }
    }

    //compare the values of the two maps
    for (let character of tmap.keys()) {
      const tLength = tmap.get(character);
      const sLength = smap.get(character);

      if (tLength !== sLength) return false;
    }
    return true;
  }
}
