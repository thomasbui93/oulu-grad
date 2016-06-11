
const mongoDB = {
    uri: "mongodb://localhost/bamboo",
    options: {
        db: {
            safe: true
        }
    }
}

const socket = 8000;

const port = process.env.NODE_PORT || 3000;

const settingConvention = {
    rootCategory: 'Root Category',
    categoryTree: 'Category Tree',
}

export { mongoDB, socket, port, settingConvention };