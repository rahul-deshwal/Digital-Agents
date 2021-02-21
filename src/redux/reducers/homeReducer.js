import * as actionTypes from '../actions/actionTypes'

const initialState = {
    titleList: [
        { id: 1,title: 'What Life Should Be', description: 'Much like those more well-known poems above, it talks us through how we ought to try to live our lives. It’s simple, yet inspiring.' },
        { id: 2,title: 'The Road Not Taken', description: 'Life is made up of a succession of choices. This famous poem begins at a fork in a wooded path and ushers the reader along one “road” as a means of explaining that we must choose one way.' },
        { id: 3,title: 'A Psalm of Life', description: 'Don’t let the world rush by without notice; open your eyes and see – really see – it in all its glory. Make space in your life for this simplest act of leisure.' },
        { id: 4,title: 'Opportunity', description: 'It talks of great acts and great deeds, but also of love and romance and laughter and loyalty – things that every man or woman is capable of.' }
    ]
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_TITLE_LIST:
            return {
                ...state,
                titleList: [
                    ...state.titleList,
                    action.titleList
                ]
            }
        case actionTypes.SET_LOCAL_LIST:
            return {
                ...state,
                titleList: action.localList
            }
        default:
            return state
    }
}

export default homeReducer
