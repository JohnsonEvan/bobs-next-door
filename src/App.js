import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import React , { useState , useEffect } from 'react';

function App() {

  const [stores, setStores] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(()=> {
    fetch("http://localhost:8085/stores")
    .then(response => response.json())
    .then(storesArray => {
      console.log(storesArray)
      setStores(storesArray)
    });
  },[])


function handleStores(stores){
  fetch('https://example.com/profile', {
  method: 'post',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(stores),
})
.then(response => response.json())
.then(data => {
  setStores([...stores, data]);
})
.catch((error) => {
  console.error('Error:', error);
});
}
function handleSearch(searchText){
  setSearchText(searchText);
}


    return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search storesList={stores}/>
      <NewStoreForm storeList={stores}/>
      <StoreList storeList={stores}/>
    </div>
  );
}

export default App;
