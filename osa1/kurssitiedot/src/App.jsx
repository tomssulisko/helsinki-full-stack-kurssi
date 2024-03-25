const Header = (props) => {
  console.log(props.course)
  return (
    <h1>
      {props.course}
    </h1>
  )
}


const Content = (props) => {

const partsHtml = props.parts.map(value => Part(value))
  return (partsHtml)
}

const Part = (props) => {
  return (
    <div>
     jee {props.name} {props.exercises}
    </div>
  )
}

const Total = (props) => {
  let total = 0;
  console.log(props.parts)

  props.parts.forEach(value => {
    total = total+ value.exercises
 })      


  return (
    <div>
    Number of exercises {total}
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

export default App