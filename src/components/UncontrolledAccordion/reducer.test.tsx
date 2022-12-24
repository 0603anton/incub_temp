import {accordionReducer, StateType, TOGGLE_COLLAPSED} from './reducer';

test('reducer should change state to opposite', () => {
    // DATA
    const state: StateType = {
        collapsed: false
    };
    //ACTION
    const stateCopy = accordionReducer(state, {type: TOGGLE_COLLAPSED})

    //expectation
    expect(stateCopy.collapsed).toBe(true);

})

test('reducer should throw error', () => {
    // DATA
    const state: StateType = {
        collapsed: false
    };
    //ACTION
    //expectation
    expect(()=>{
        accordionReducer(state,{type:'FAKE_TYPE'})
    }).toThrowError(); // if fake action


})
