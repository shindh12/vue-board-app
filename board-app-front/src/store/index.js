/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import Constant from '../Constant.js';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store ({
    state : {
        posting : { no:'', title:'', author:'', date:'', count:''},
        boardlist : [
            {  }
        ]
    }, // boardlist 나중에는 서버에서 fetch
    mutations : {
        [Constant.CREATE_POSTING] : (state, payload) => {
        },
        [Constant.READ_POSTING] : (state, payload) => {
        },
        [Constant.UPDATE_POSTING] : (state, payload) => {
        },
        [Constant.DELETE_POSTING] : (state, payload) => {
        }
    },
    actions : {
        [Constant.CREATE_POSTING] : (store, payload) => {
            
        }
    }
})