
let accountLogin = {}
if (localStorage.getItem("ACCOUNTLOGIN")) {
    accountLogin = JSON.parse(localStorage.getItem("ACCOUNTLOGIN"));
}
let userLogin = {}
if (localStorage.getItem("USER_LOGIN")) {
    userLogin = JSON.parse(localStorage.getItem("USER_LOGIN"));
}

const stateDefault = {
    userLogin: userLogin,
    accountLogin: accountLogin,
    imageUrlUser: [],
    imageUrlCty: [],
    imageUrlCoverCty: [],

    detail_post: [],
};


const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DANG_NHAP": {
            state.userLogin = action.data.data[0]
            state.accountLogin = action.account
            return { ...state }
        }

        case "SUA_URL_USER":{
            state.imageUrlUser = action.imageUrl;
            console.log(state.imageUrl)
            return {...state};
        }

        case "SUA_URL_CTY":{
            state.imageUrlCty = action.imageUrl;
            console.log(state.imageUrlCty)
            return {...state};
        }

        case "SUA_URL_COVER_CTY":{
            state.imageUrlCoverCty = action.imageUrl;
            console.log(state.imageUrlCoverCty)
            return {...state};
        }

        case "LUU_DETAIL":{
            state.detail_post = action.detail;
            console.log(state.detail_post)
            return {...state};
        }

        default: return { ...state }
    }
}

export default QuanLyNguoiDungReducer;