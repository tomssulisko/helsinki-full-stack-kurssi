const Header = (props) => {
  console.log(props.course)
  return (
    <h1>
      {props.course}
    </h1>
  )
}


const Content = (props) => {

  return (
    <div>
        {props.parts.map(value =>
          <Part key={value.id} course={value} />
        )}
    </div>
    )
}


const Part = ({course}) => {
  return (
    <div>
    {course.name} {course.exercises}
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

const Course = ({course}) => {

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <br />
      <Total parts={course.parts}/>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
      ,
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }


  return (
    <div>
    <Course key={course.parts.id} course={course} />
  </div>
  )
}

export default App