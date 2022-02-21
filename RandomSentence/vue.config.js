//Debugging on Dev
// module.exports = {
//     devServer: {
//         proxy: {
//             "/": {
//                 target: "http://localhost"
//             }
//         }
//     }
// }

//Debugging on Oper
module.exports = {
    devServer: {
        proxy: {
            "/front": { //front로 시작하는 경우 아래 경로의 '주소/front'로 프록시
                target: "http://3.37.177.203"
            }
            // ,"/TEST": {
            //     target: "TEST IP"
            // }
        }
    }
}