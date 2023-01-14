import { Button } from "rsuite";
import { useDispatch } from "react-redux";
import { setPicBoothInfo, setSelectionInfo } from "../../slice/picpicoInfo";

const PicDoneBtn = () => {
  const dispatch = useDispatch();

  function onPicDoneBtnClick() {
    dispatch(setPicBoothInfo({ value: false }));
    dispatch(setSelectionInfo({ value: true }));
  }
  return <Button onClick={onPicDoneBtnClick}>사진찍기 완료</Button>;
};

export default PicDoneBtn;
