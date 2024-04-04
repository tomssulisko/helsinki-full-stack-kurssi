const Header = (props) => {
    return (
      <h2>
        {props.course}
      </h2>
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
  
  const Total = ({parts}) => { 
    const total = parts.reduce( ( total, part) => {
      return total+part.exercises
    },0)
  
    return (
      <b>
        Total of {total} exercises 
      </b>
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

  export default Course