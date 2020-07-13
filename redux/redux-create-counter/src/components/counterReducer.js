const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'LESSONE':
      return state - 1
    case 'LESSTEN':
      return state - 10
    case 'MOREONE':
      return state + 1
    case 'MORETEN':
      return state + 10
    case 'RESET':
      return 0
    default:
      return state
  }
}

export default counterReducer