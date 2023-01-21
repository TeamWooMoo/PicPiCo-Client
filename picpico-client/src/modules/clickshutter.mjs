import { setIdxCount, setTakePic } from "../slice/takepicInfo.js";
import store from "../store.js";
import { socket } from "./sockets.mjs";
let worker;
export const onClickShutterEvent = idx => {
  console.log("애들아 찍어!");
  store.dispatch(setIdxCount({ value: (parseInt(idx) + 1).toString() }));
  store.dispatch(setTakePic({ value: true }));
};

//im
export const onSendPicEvent = async (idx, imgArr) => {
  // const canvas = document.getElementById("drawnCanvas");
  // const ctx = canvas.getContext("2d");
  // async function first() {
  //   await imgArr.forEach(async obj => {
  //     const url = obj.picture;
  //     const img = new Image();
  //     img.src = url;
  //     img.onload = async function () {
  //       await ctx.drawImage(img, 0, 0);
  //     };
  //   });
  // }
  // await first();
  // const resultUrl = await canvas.toDataURL("image/png");
  // socket.emit("result_pic", idx, resultUrl);
  // console.log("result:", resultUrl);
  // console.log("사진 5장 다 그렸음. 서버야 이게 최종본이야");
  // ctx.clearRect(0, 0, 350, 350);
  if (window.Worker) {
    // if (worker) {
    //   stopWorker();
    // }
    worker = new Worker("../worker.js");
    worker.postMessage("워커 실행");

    worker.onmessage = function (e) {
      console.log("호출 페이지 - ", e.data);
      alert(e.data);
    };
  }
};
