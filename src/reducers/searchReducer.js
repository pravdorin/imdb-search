export default (state = [], action) => {
    switch (action.type) {
        case 'SEARCH_FILMS':
            return action.payload;
        default:
            return state;
    }
}
