exports.handler = async (event, context) => {
    try {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Hello World' })
        }
    }
    catch (err) {
        return { statusCode: 500, body: err.toString() }
    }
}
