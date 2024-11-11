import { useState } from 'react';
import './App.css';
import Timer from './Timer.tsx';
import Clock from './Clock.tsx';
import { Button, Modal } from 'react-bootstrap';
import React from 'react';


interface MyComponentProps{
    title : string;
}

type Todo = {
    id : number;
    text : string;
    isChecked : boolean;
}

//function component
const TodoList : React.FC<MyComponentProps> = ({title}) => {

    //스테이트 사용하는 방법
    //스테이트 함수 사용
    //1. 외부의 불필요한 접근 금지
    //2. 코드의 일관성 유지

    const [todos, setTodos] = useState<Todo[]>([
        {id : 1, text : "공부하기", isChecked : false}, 
        {id : 2, text : "밥먹기", isChecked : false}, 
        {id : 3, text : "커피마시기", isChecked : false}
    ]);

    const [newTodo, setNewTodo] = useState<string>('');

    const [showDetail, setShowDetail] = useState<boolean>(false);

    function handleCheckboxChange(itemId : number){
        setTodos((prevItems)=>
            prevItems.map((item)=>
               item.id === itemId ? {...item, isChecked : !item.isChecked} : item
            )     
        );
    }

    //배열의 결합
    // [...배열1, ...배열2]

    const addTodo = () =>{
        if(newTodo.trim() != ''){
            setTodos([
                ...todos, {id : Date.now(), text : newTodo, isChecked : false}
            ]);
            setNewTodo('');
        }
    }

    const removeTodo = (id : number) => {
        setTodos(todos.filter((user)=>{
            return id !== user.id
        }))
    }

    const handleTodoClick = (todo : Todo) => {
        setShowDetail(true);
    }

    const handleCloseDetail = () => {
        setShowDetail(false);
    }

    return(
        <div className='container mt-5'>
            <div>
                <h1 className='titlebk'>{title}</h1>
            </div>

            <div className='form-group' 
                style = {{display:'flex', alignItems : 'center', marginBottom : '30px'}}
            >
                <input type = "text" 
                    className='form-control'
                    value={newTodo}
                    placeholder='할 일 입력'
                    style = {{marginRight : '10px', writingMode : 'horizontal-tb'}}
                    onChange={(e)=>{
                        setNewTodo(e.target.value);
                    }}
                ></input>
                <button 
                    className='btn btn-success'
                    style = {{whiteSpace : 'nowrap'}}
                    onClick={addTodo}
                >추가하기</button>
            </div>

            <div className='card'>
                <div className='card-body'>
                    <ul className='list-group'>
                        {
                            todos.map((todo, index)=>
                                <li key = {todo.id} 
                                    className='list-group-item d-flex
                                    align-items-center justify-content-between'
                                    style = {{fontSize : "1.2rem"}}
                                >
                                    <div className='form-check'>
                                        <input type = 'checkbox'
                                            className='form-check-input'
                                            onChange={()=>{
                                                handleCheckboxChange(todo.id);
                                            }}
                                        ></input>
                                    </div>
                                    <label className='form-check-label'>
                                        {
                                            todo.isChecked ? <del>{todo.text}</del> : 
                                                <span onClick={()=>handleTodoClick(todo)}>{todo.text}</span>
                                        }
                                    </label>
                                    <button className='btn btn-danger'
                                        onClick={()=>{removeTodo(todo.id)}}
                                    >삭제</button>
                                </li>
                            ) 
                        }                    
                    </ul>
                </div>
            </div>
            <p></p>
            <Modal show = {showDetail} centered>
                <Modal.Header closeButton>
                    <Modal.Title>상세정보</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    자세한 정보를 출력합니다
                    <p>현재 날짜 : {new Date().toLocaleDateString()}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant = "secondary" onClick = {handleCloseDetail}>
                        닫기
                    </Button>
                </Modal.Footer>       
            </Modal>            

            {/* <Timer></Timer> */}
            <Clock></Clock>
        </div>

    )
}

export default TodoList;