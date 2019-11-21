export const samples = (state = {}, action: any) => {

  switch (action.type) {

    case 'STORE_SAMPLES_DATA':
      return Object.assign({}, state, {
        currentStage: 1,
        ...action.data
      });

    case 'INCREMENT_CURRENT_STAGE':
      return Object.assign({}, state, {
        currentStage: action.stage
      });

    default:
      return state;
  }
}

export default samples;