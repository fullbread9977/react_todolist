import React, { Component, Fragment, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import ClassCom from './ClassCom';
import FuncCom from './FuncCom';
import TodoList from './TodoList';

interface GreetingProps{
  name : string;
  children : React.ReactNode;//문자열, 숫자, 배열, null, undefined ...
}

interface MyButtonProps{
  myClick : () => void;
}

const MyButton : React.FC<MyButtonProps> = (props) =>{
  return <button onClick = {props.myClick}>클릭</button>
}

const Greeting : React.FC<GreetingProps> = ({name, children}) =>{
  // const {name, children} = props;
  return (
    <div>
      {/* <h1>{name}님. 반갑습니다.</h1>
      <h4>오늘의 날씨는 {children}</h4> */}
    </div>
  )
}

// class Greeting extends Component<GreetingProps>{
//   render(){
//     return <h1>{this.props.name}님. 반갑습니다.</h1>
//   }
// }

function App() {
  //자바스크립트
  //단일 루트 요소 규칙
  //클래스 선택자 className
  //인라인 스타일링
  //태그 닫기


  const person = {
    myname : 'lch',
    age : 30,
    height : 180
  };

  // const name = person.myname;
  // const age = person.age;
  // const height = person.height;

  const {myname, age, height} = person;

  //스프레드 연산자
  // const originalArray = [1,2,3];
  // const copiedArray1 = originalArray;
  // const copiedArray2 = [...originalArray];

  // console.log(copiedArray1 === originalArray);
  // console.log(copiedArray2 === originalArray);

  // const originalArray1 = [1,2,3];
  // const originalArray2 = [4,5,6];

  // const mergedArray = [originalArray1, originalArray2];

  // console.log(mergedArray);

  const [count, setCount] = useState<number>(0);

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      {/* <Greeting name = "머스크">흐림</Greeting> */}
      <p>Count : {count}</p>
      <MyButton myClick = {handleClick}></MyButton>

      <TodoList title = "오늘 할일"></TodoList>
    </div>
  );
}

export default App;
