import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  message: string;
  onDialogAnswer: (active: boolean) => void;
};

const DialogConfirmation = ({ message, onDialogAnswer }: Props) => {
  return (
    <div
      className="dsc-dialog-background"
      onClick={() => onDialogAnswer(false)}
    >
      <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(true)}>
            <ButtonPrimary name="Sim" />
          </div>
          <div onClick={() => onDialogAnswer(false)}>
            <ButtonInverse name="Não" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogConfirmation;
