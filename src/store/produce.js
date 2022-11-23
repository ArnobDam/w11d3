import produceData from '../mockData/produce.json'

export default function produceReducer(state = {}, action) {
    Object.freeze(state)

    // const nextState = {...state}



    switch (action.type) {
        case POPULATE:
            const produceObject = {}
            action.produce.forEach(item => (
                produceObject[item.id] = item
            ))
            return produceObject;
        default:
            return state;
    }
}

const POPULATE = "produce/POPULATE"

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData
    }
}
