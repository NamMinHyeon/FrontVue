<template>
    <header>
        <div>
            <!-- <table>
                <td width><img id="menu" class="menu-bars" src="../assets/menu.png"></td>
                <td><h>English Pratice App2</h></td>
                <td><img id="refresh" class="menu-bars" src="../assets/refresh.png" @click="reloadPage()"></td>
            </table> -->
            <img id="menu" class="menu-bars" src="../assets/menu.png">
            <img id="header" src="../assets/Open_English_Logo_White.png">
            <!-- <p>English Pratice App</p> -->
            <img id="refresh" src="../assets/refresh.png" @click="reloadPage()">
        </div>
    </header>
</template>s

<script>

import { reactive } from "vue";

    // Vue 3.x
    export default {
        
      props: {
        title: String
      },
      setup () {

        const state = reactive({
            data: [],   //선언
        })
    
        const reloadPage = () => {
            window.location.reload();
        }
        return { 
          state, reloadPage
        }
      }
    }

</script>

<style lang="scss" scoped>
header {
    text-align: left;
    padding: 25;
    border-bottom: 1px solid #eeeeee;
    // background: white;
    background: black;
    // background: rgb(198, 217, 235);

    div {
        height: 55px;

        
        img {
            padding: 3px;
            margin: 3px;
        }

        #menu {
            float: left;
            height: 50px;
            width: 40px;
        }

        #header {
            float: left;
            height: 50px;
            // width: 50px;
        }


        #refresh {
            float: right;
            height: 50px;
            width: 50px;
        }

        p {
            // text-align: center;
            color: white;
            font-size: 25px;
            font-family: "Open Sans", sans-serif;
            font-weight: 700;
            padding: 0px;
            // margin: 10px;
        }
    }     
}
</style>