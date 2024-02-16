function reverseWords(s: string): string {
    let arr = s.split(" ").filter(word => word.length != 0);
    
    return arr.reverse().join(" ");
};
console.log(reverseWords("the sky is blue"))
