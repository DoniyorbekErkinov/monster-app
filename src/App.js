import "./App.css";
import { Component, useEffect, useState } from "react";
import CardList from "./components/card-list/cardList";
import SearchBox from "./components/search-box/searchBox";
const App = () => {
  console.log('render')
  const [search, setSearch] = useState('');
  const [monsters, setMonsters] = useState([]);
  const onSearch = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearch(searchString)
    console.log(search)
  };
  const filteredMosters = monsters.filter((el) => {
    return el.name.toLocaleLowerCase().includes(search)
  })
  const fetchMonsters = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => {
        setMonsters(users)
      });
  }
  useEffect(() => {
    fetchMonsters()
  }, [])
  return (
    <>
      <div className="App">
         <h1 className="app-title">Monsters info</h1>
         <SearchBox
           onChangeHandler={onSearch}
           type={"search"}
           placeholder={"Search..."}
           className={"monster-search-box"}
         />
         <CardList monsters={filteredMosters} anyThing={["a", "b"]} />
       </div>
    </>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       search: "",
//     };
//   }
//   componentDidMount() {
    // fetch(`https://jsonplaceholder.typicode.com/users`)
    //   .then((res) => res.json())
    //   .then((users) => {
    //     this.setState(
    //       () => {
    //         return { monsters: users };
    //       },
    //       () => {
    //         // console.log(this.state.monsters);
    //       }
    //     );
    //   });
//   }
//   onSearch = (event) => {
//     const search = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return {
//         search,
//       };
//     });
//   };
//   render() {
//     const { monsters, search } = this.state;
//     const { onSearch } = this;
//     const filteredMosters = monsters.filter((el, i) => {
//       return el.name.toLocaleLowerCase().includes(search.toLocaleLowerCase());
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters info</h1>
//         <SearchBox
//           onChangeHandler={onSearch}
//           type={"search"}
//           placeholder={"Search..."}
//           className={"monster-search-box"}
//         />
//         <CardList monsters={filteredMosters} anyThing={["a", "b"]} />
//       </div>
//     );
//   }
// }

export default App;
