type actionType = {
    type: string
}
export const TOGGLE_COLLAPSED = 'TOGGLE_COLLAPSED'

export type StateType = {
    collapsed: boolean
}

export const accordionReducer = (state: StateType, action: actionType):StateType => {
    switch (action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed:!state.collapsed};
        default:
            throw new Error('Bad action type') // свою конкретную ошибку делать
    }
    return state

}