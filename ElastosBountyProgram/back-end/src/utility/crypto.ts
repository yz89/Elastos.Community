import * as hmacSha512 from 'crypto-js/hmac-sha512';
import * as aes from 'crypto-js/aes';
import * as utf8 from 'crypto-js/enc-utf8';

const secret = process.env.APP_SECRET || 'app';
export default {
    sha512(str: string){
        return hmacSha512(str, secret).toString();
    },

    encrypt(str: string){
        return aes.encrypt(aes.encrypt(str, secret).toString(), secret+'_x').toString();
    },
    decrypt(str: string){
        return aes.decrypt(aes.decrypt(str, secret+'_x').toString(utf8), secret).toString(utf8);
    }
};