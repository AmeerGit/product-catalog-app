// function calculates the Levenshtein distance between two strings.

export const calculateFuzzyDistance = (a: string, b: string): number => {
    const dp: number[][] = [];
    const lenA = a.length;
    const lenB = b.length;
  
    for (let i = 0; i <= lenA; i++) {
      dp[i] = [i];
    }
    for (let j = 0; j <= lenB; j++) {
      dp[0][j] = j;
    }
  
    for (let i = 1; i <= lenA; i++) {
      for (let j = 1; j <= lenB; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // deletion
          dp[i][j - 1] + 1, // insertion
          dp[i - 1][j - 1] + cost // substitution
        );
  
        if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
          dp[i][j] = Math.min(dp[i][j], dp[i - 2][j - 2] + cost); // transposition
        }
      }
    }
  
    return dp[lenA][lenB];
  };