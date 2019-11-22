module.exports = (query) => {
    if (query == 'yes' || query == 'let\'s go' || query == 'true' || query == 'okey' || query == 'continue' || query == 'i want' || query == 'yeah' || query == 'of course') {
        return true
    }

    return false
}