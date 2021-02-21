import * as actionTypes from './actionTypes'

export const setTitleList = titleList => {
    console.log(titleList,'titleList actions')
    return {
        type: actionTypes.SET_TITLE_LIST,
        titleList: titleList
    }
}

export const setDataFromLocal = localList => {
    console.log(localList,'setDataFromLocal actions')
    return {
        type: actionTypes.SET_LOCAL_LIST,
        localList: localList
    }
}