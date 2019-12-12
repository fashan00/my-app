
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.ocr.space/parse/image',
    timeout: 10000,
    headers: {
        'Content-Type': 'multipart/form-data',
        'apikey': '5bed70a58c88957',
    }
});


export const getTextByBase64 = (base64Image) => {
    let data = new FormData();
    data.set('base64Image', base64Image);
    // data.set('url', 'http://i.imgur.com/fwxooMv.png');
    return instance.post(``, data);
}