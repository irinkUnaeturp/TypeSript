function hIndex(citations: number[]): number {
    let result = 0
    const sorted = citations.filter(Boolean).sort(((a, b) => b - a))
  
    for (let i = 0; i < sorted.length; i += 1) {
      if (sorted[i] >= i + 1){
        result += 1
      } else {
        break
      }
    }
  
    return result
  };
  console.log(hIndex([3,0,6,1,5]))
