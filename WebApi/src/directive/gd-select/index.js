

import Vue from 'vue'
import emitter from '../mixins'
import clickoutside from '../clickoutside'

Vue.component("gd-select",{  
    name: 'gdSelect',
    data(){
        return {
            selectShow: false,
            iptval: ''
        };
    },
    directives: { clickoutside },
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    template:`<section class="gd-select-warp" v-clickoutside="handleClose">
                <div class="clearFix">
                    <div class="gd-select-search">
                        <input type="text" class="ivu-input" v-model="iptval" @click="showOrHidden" placeholder="请选择" @input="match" />
                    </div>
                    <div class="ivu-select-dropdown">
                        <ul class="ivu-select-dropdown-list" v-show="selectShow">
                            <slot></slot>
                        </ul>
                    </div>
                </div>
            </section>`,
    methods:{
        showOrHidden(){
            this.selectShow = !this.selectShow;
        },
        match(){
            if(!this.iptval){
                this.selectShow = false;
            }
            this.selectShow = true;
            this.$emit('on-change', this.iptval);
        },
        handleClose(){
            this.selectShow = false;
        }
    },
    beforeMount(){
        this.iptval = this.value;
    },
    mounted(){
        this.$on('on-select-selected', value => {
            this.iptval = value;
            this.selectShow = false;
            this.$emit('on-change', value);
        })
    }
});
Vue.component("gd-option",{  
    name: 'gdOption',
    data(){
        return {
            
        };
    },
    mixins: [ emitter ],
    props: {
        value: {
            type: [String, Number],
            default: ''
        }
    },
    template:`<li @click="select" class="ivu-select-item">{{value}}</li>`,
    methods:{
        select(){
            this.dispatch('gdSelect', 'on-select-selected', this.value);
        }
    }
});