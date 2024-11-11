import { Button, Modal } from "react-bootstrap";

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}

type TodoModalProps = {
    show : boolean;
    handleClose : () => void;
    todo : Todo | null;
}
const TodoModal : React.FC<TodoModalProps> = ({show, handleClose, todo}) => {
    return {
        <Modal show = (showDetail) centered>
            <Modal.Header closeButton>
                <Modal.Title>상세정보</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            자세한 정보를 출력합니다
            <p>현재 날짜 : {new Date().toLocaleDateString()}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant = "secondary" onClick ={handleCloseDetail}>
                    닫기
                </Button>
            </Modal.Footer>
    }
}
export default TodoModal;