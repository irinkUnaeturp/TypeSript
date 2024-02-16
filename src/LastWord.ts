function lengthOfLastWord(s: string): number {
    const splitted = s.trim().split(' ')

    return splitted[splitted.length - 1].length
};
console.log(lengthOfLastWord("Hello World"))
