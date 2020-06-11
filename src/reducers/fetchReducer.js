export default (state = [], action) => {
    switch (action.type) {
        case 'DELETE_FILMS':
            return []
        case 'FETCH_FILM':
            return  [...state, action.payload];
        default:
            return state;
    }
}
