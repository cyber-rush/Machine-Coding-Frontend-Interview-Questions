let explorer = {
    name: 'src',
    folderItems: [
        {
            name: 'app.js',
        },
        {
            name: 'Index.js',
        },
        {
            name: 'Styles',
            folderItems: [
                {
                    name: 'styles.css',
                },
                {
                    name: 'Index.css',
                },
                {
                    name: 'vendor.css',
                    folderItems: [
                        {
                            name: 'styles.css',
                        },
                        {
                            name: 'Index.css',
                        },
                        {
                            name: 'vendor.css',
                        },
                    ],
                },
            ],
        },
    ],
};

export default explorer;
