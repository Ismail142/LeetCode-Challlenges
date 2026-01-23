function isPalindrome(s: string): boolean {
    const alphabets:string[] = 'abcdefghijklmnopqrstuvwxyz0123456789'.split("");
    let onlyLetter:string[] = [];

    for (let i of s){
        if (alphabets.includes(i.toLowerCase())){
            onlyLetter.push(i.toLowerCase());
        }
    }

    if (onlyLetter.join("") === (onlyLetter.reverse()).join("")){
        return true;
    }

    return false;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));

