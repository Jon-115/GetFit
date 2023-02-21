
const reducer = (state, action) => {

    if(state === undefined){
        state = {
            gotInfo: false,
            calcStats: {},
            defStats: {}
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
        default:
            return state
    }
}

export default reducer