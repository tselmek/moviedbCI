module.exports = {
    ci: {
        collect: {
            url: [
                'http://localhost:3000/',
                'http://localhost:3000/movie/508943',
            ],
            startServerCommand: 'yarn start',
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
