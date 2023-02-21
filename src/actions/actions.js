export const gotInfo = () => {

    return{
        type: 'GOT_INFO'
    }
}

export const getCalcStats = (stats) => {

    return{
        type: 'GET_CSTATS',
        stats
    }
}

export const getDefStats = (stats) => {

    return{
        type: 'GET_DSTATS',
        stats
    }
}

export const set_Mode = (mode) => {

    return{
        type: 'SET_MODE',
        mode
    }
}