import { setDecoListInfo } from "../slice/decoInfo.js";
import store from "../store.js";

export const onPickDecoEvent = obj => {
  console.log("obj from server", obj);
  store.dispatch(setDecoListInfo({ value: obj }));
};
