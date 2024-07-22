function RandomPassword(length,includelowerchars,includeupperchars,includenumbers,includesymbols){
    const lowercasechars="abcdefghijklmnopqrstuvwxyz";
    const uppercasechars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers="0123456789";
    const symbols="!@#$%^&*()+=";
    let allowedchars="";
    let password="";
    allowedchars += includelowerchars ? lowercasechars : "";
    allowedchars += includeupperchars ? uppercasechars : "";
    allowedchars += includenumbers ? numbers : "";
    allowedchars += includesymbols ? symbols : "";
     if (length<=0){
        return `(Password length must be atleast 1)`;
     }
     if(allowedchars.length === 0){
        return `(atleast 1 set of char need to be selected)`;
     }
     for(let i=0;i<=length;i++){
        const RandomIndex=Math.floor(Math.random()*allowedchars.length);
        password += allowedchars[RandomIndex];
     }
     return password;
    }

const length=10;
const includeupperchars=true;
const includelowerchars=true;
const includesymbols=true;
const includenumbers=true;
const password=RandomPassword(length,includelowerchars,includeupperchars,includenumbers,includesymbols);
console.log(`Generated pass: ${password}`);
