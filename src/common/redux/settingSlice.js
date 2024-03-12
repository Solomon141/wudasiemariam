import { createSlice } from '@reduxjs/toolkit';
// let currentdate = new Date();

const initialState = {
    themeName: 'DefaultTheme',
    langName: 'en',
    textColor: '#000',
    compId: 2,
    switchValue: true,
    serverIP: '196.189.155.87',
    torchStat: 'FlashMode.off',
    wallet: [],
    usageInfo: [],
    charitiesList: [],
    userSessionOut: false,
    sessionTimeOutValue: new Date(),
    loadingFinished: true,
};

const settingSlice = createSlice({
    name: 'setting',
    initialState: initialState,
    reducers: {

        changeLoadingFinished: (state, action) => {
            console.log(action)
            return {
                ...state,
                loadingFinished: action.payload.loadingFinished,
            };
        },

        changeSessionTimeOutValue : (state, action) => {
            let currentdate = new Date();
            // currentdate.setMinutes(currentdate.getMinutes() + 2);
            return {
                ...state,
                sessionTimeOutValue: currentdate
            };
        },

        changeTorch: (state, action) => {
            return {
                ...state,
                switchValue: action.payload.switchValue,
                torchStat: action.payload,
            };
        },

        changeIP: (state, action) => {
            return {
                ...state,
                serverIP: action.payload.serverIP,
            };
        },

        changeLang: (state, action) => {
            return {
                ...state,
                langName: action.payload.langName,
            };
        },

        walletData: (state, action) => {
            return {
                ...state,
                wallet: action.payload.wallet,
            }
        },
        usageInfoData: (state, action) => {
            return {
                ...state,
                usageInfo: action.payload.usageInfo,
            }
        },
        charityList: (state, action) => {
            console.log(action.payload)
            return {
                ...state,
                charitiesList: action.payload.charityList,
            }
        },
        clearUserData: (state, action) => {
            return {
                themeName: 'DefaultTheme',
                langName: 'am',
                textColor: '#000',
                compId: 2,
                switchValue: true,
                serverIP: '196.189.155.87',
                torchStat: 'FlashMode.off',
                wallet: [],
                usageInfo: [],
                charityList: []
            }
        }
    }
})

export const { changeLoadingFinished, changeSessionTimeOutValue, changeTorch, changeLang, changeIP, walletData, usageInfoData, clearUserData, charityList } = settingSlice.actions;
export default settingSlice.reducer;
