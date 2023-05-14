import ButtonInverse from "../ButtonInverse";
import ButtonPrimary from "../ButtonPrimary";

type Props = {
  id: number;
  message: string;
  onDialogAnswer: (active: boolean, id: number) => void;
};

const DialogConfirmation = ({ id, message, onDialogAnswer }: Props) => {
  return (
    <div
      className="dsc-dialog-background"
      onClick={() => onDialogAnswer(false, id)}
    >
      <div className="dsc-dialog-box" onClick={(e) => e.stopPropagation()}>
        <h2>{message}</h2>
        <div className="dsc-dialog-btn-container">
          <div onClick={() => onDialogAnswer(true, id)}>
            <ButtonPrimary name="Sim" />
          </div>
          <div onClick={() => onDialogAnswer(false, id)}>
            <ButtonInverse name="Não" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogConfirmation;
