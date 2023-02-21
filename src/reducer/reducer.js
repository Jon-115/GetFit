
const reducer = (state, action) => {

    if(state === undefined){
        state = {
            gotInfo: false,
            calcStats: {},
            defStats: {},
            mode: 'Loose'
        }
    }

    switch(action.type){

        case "GOT_INFO":

            return{
                ...state, 
                gotInfo: true
            }
        case "GET_CSTATS":

            return{
                ...state,
                calcStats: action.stats
            }
        case "GET_DSTATS":

            return{
                ...state,
                defStats: action.stats
            }
        case 'SET_MODE':

            return {
                ...state,
                mode: action.mode
            }
        default:
            return state
    }
}

export default reducer