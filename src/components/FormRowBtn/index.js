import FormButton from "../FormButton";
import "./index.css"
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
const FormRowBtn = ({ onClickPrev, onClickNext, hideNext, hidePrev}) => {

  return (
      <div className="btnView">
        {hidePrev ? <></> :<FormButton text="Previous" onClick={onClickPrev} leftIcon={<ArrowLeftIcon className="arrowIcon"/>} />}
        {hideNext ? <></> : <FormButton text="Next" onClick={onClickNext} rightIcon={<ArrowRightIcon className="arrowIcon"/>} />}
      </div>
    );
}

export default FormRowBtn;