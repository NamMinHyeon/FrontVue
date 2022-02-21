<template>
    <div id="memo" class="memo">
        <div class="act">
            <ul>
                <li v-for="(d, idx) in state.data" :key="idx">                    
                    <br>
                    <!-- <text>{{  idx + 1 }}</text> -->
                    <img id="check" class="menu-bars" src="../assets/check.png"><text>&nbsp;&nbsp;{{ d.KOR }}</text>
                    <button v-show="showEng == idx+temp" id="btn1" class="btn" @click="add(d.SEQ_SUB), showAddBtn = idx+temp">Add</button>
                    <br>

                    <button v-show="showClickBtn != idx+temp" id="btn2" class="btn" @click="show(idx), showEng = idx+temp, showClickBtn = idx+temp">Click!</button>
                    <br>
                    <p>&nbsp;&nbsp;</p><text v-show="showEng == idx+temp">&nbsp;<img id="answer" class="menu-bars" src="../assets/answer.png">&nbsp;{{ d.ENG }}</text>
                    <br>
                    <hr>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {

    // Vue 3.x
    setup() {
        const state = reactive({
            testValue: '',
            data: [],   //선언
        })

        // axios : HTTP 통신을 위한 모듈
        // CORS 이슈 해결을 위해 Proxy 개념 도입 - vue.config.js 
        // http://localhost:8080/randomCallJson 호출시 → vue.config.js 참조 → 시작 주소 확인 → front인 경우 /front/randomCallJson 호출
        axios.get("/front/randomCallJson").then((res) => {
            // console.log(res.data.result_data[0].KOR);
            // console.log(res.data.result_data[0].ENG);
            // console.log(res.data.result_data[0].SEQ_SUB);
            // state.data = res.data;
            state.data = res.data.result_data;
        });

        const add = (SEQ_SUB) => {
            // const content = prompt(SEQ_SUB);
            console.log(SEQ_SUB);
            axios.post("/front/checkResult", { SEQ_SUB }).then((res)=>{
            // axios.post("/checkResult").then((res)=>{
                // state.data = res.data;
                console.log(res);
                //추가했을시 처리할 내용
            })
        };

    
        const show = (idx) => {
            console.log(idx);
            // console.log(showEng);
            
        };

        return { state, add, show };
    },
    data() {
        return {
            temp: 9999, //임시 변수
            shoeAddBtn: false,
            showClickBtn: true,
            showEng: false, //초기에는 비활성화
            // showEng0: false,
            // showEng1: false,
            // showEng2: false,
            // showEng3: false,
            // showEng4: false,
    };
  },
}
</script>

<style lang="scss" scoped>

.memo {

    background-color: rgb(230, 230, 255);

    .act{
        padding: 10px 10px 5px 5px;
        text-align: left;
    }

    ul {  
        list-style: none;
        padding: 0;
        margin: 0;

        li {    
            margin: 10px;

            hr {
            border: 1px solid black;
            border-radius: 10px;
            }


            text {
                color: black;
                font-size: 15px;
                font-family: "Open Sans", sans-serif;
                font-weight: 700;
                float: left;
            }

            p {
                color: white;
                float: left;
            }

            #check {
                        float: left;
                        height: 20px;
                        width: 20px;
            }

            #answer {
                        float: left;
                        height: 15px;
                        width: 15px;
            }

            #btn1 {
                float: right;
                padding: 8px;
                text-align: center;
                margin: 7px;
                color: white;
                background-color: #555555;
                font-family: "Open Sans", sans-serif;
                font-weight: 700;
            }
            
            #btn2 {
                float: left;
                padding: 5px 5px 5px 5px;
                text-align: center;
                margin: 15px;
                background-color: rgb(180, 205, 228); 
                color: black;
                font-family: "Verdana", sans-serif;
                font-weight: 700;
            }
        }
    }


}
</style>