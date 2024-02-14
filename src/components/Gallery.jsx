import Profile from './Profile';
import TodoList from './ToDoList';

function Gallery() {
  function add() {
    console.log('hellllloooooo-----------------')
  }
  let count = 0;

  function countIncrease(e, hello) {
    count++;
    console.log(hello, count);
    console.log(e.target.innerText);
  }
  const persons = [
    {
      name: 'Haser',
      imageUrl: "https://i.imgur.com/MK3eW3As.jpg",
      show: true
    },
    {
      name: 'Niloy',
      imageUrl: "https://i.imgur.com/MK3eW3As.jpg",
      show: false
    },
    {
      name: 'Mohit',
      imageUrl: "https://i.imgur.com/MK3eW3As.jpg",
      show: true
    },
    {
      name: 'Poli',
      imageUrl: "https://i.imgur.com/MK3eW3As.jpg",
      show: false
    },

  ]
  return (
    <>
      <h1>Gallery</h1>
      <button onClick={(e) => countIncrease(e, 'show this messages')}>
        Click to increase
      </button>
      <p>{count}</p>
      {
        persons.map(person => <Profile name={person.name} imageUrl={person.imageUrl} addProps={add} show={person.show}/>)
      }
    </>
  )
}

export default Gallery;