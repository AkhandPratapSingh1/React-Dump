const initialState ={
    adminData: null,
    userData: null,
    userName:null,
    password:null,
    isLoading:false,
    previlige:null
    }
    
    const AppReducer = (state=initialState, action) => {
        switch(action.type){
            case 'START_LOADING':
            return Object.assign({},state, {isLoading: true, userData:null, adminData:null,} )

            case 'STOP_LOADING':
            return Object.assign({},state, {isLoading: false} )

            case 'SET_PREVILIGE':
            return Object.assign({},state, {previlige: action.payload} )

            case 'FETCH_ADMIN_DATA':
            return Object.assign({},state, {adminData: action.payload} )

            case 'FETCH_USER_DATA':
            return Object.assign({},state, {userData: action.payload} )

            case 'FETCH_SUCCEEDED':
            console.log('FETCH_SUCCEEDED ... ', action.payload);
            return Object.assign({},state, {students: action.payload} )

            case 'ON_FIELD_CHANGE':
            return Object.assign({},state, {[action.payload.key]: action.payload.value} )

            case 'LOG_OUT_AND_RESET':
            return Object.assign({},state, { adminData: null,
                userData: null,
                userName:null,
                password:null,
                isLoading:false,
                previlige:null })
    
            default:
            return state
        }
    }
    export default AppReducer