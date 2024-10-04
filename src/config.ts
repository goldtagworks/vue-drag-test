export const Domain = {
    api: () => {
        return process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8090' : 'http://api.voclab.co.kr';
        // return process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8090' : 'http://127.0.0.1:8090';
    },

    site: () => {
        return process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:8090' : 'http://m.voclab.co.kr';
        //return process.env.NODE_ENV === 'development' ? 'http://127.0.0.1' : 'http://127.0.0.1';
    }
};
