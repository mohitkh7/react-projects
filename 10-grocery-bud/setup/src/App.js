import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const LS_KEY = 'list'

const getLocalStorage = () => {
  let list = localStorage.getItem(LS_KEY);
  return list ? JSON.parse(localStorage.getItem(LS_KEY)) : []
}


function App() {
  const [name, setName] = useState('');
  const [list, setList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [alert, setAlert] = useState({show: false, msg: '', type: ''});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      setAlert({show: true, msg: 'please enter value', type: 'danger'});
    } else if (isEditing) {
      setAlert({
        show: true,
        msg: 'Item edited successfully',
        type: 'success'
      });
      setList(list.map((item) => {
        if (item.id === editId) {
          return {...item, title: name};
        }
        return item;
      }));
      setEditId(null);
      setIsEditing(false);
      setName('');
    } else if (name) {
      const newItem = {id: new Date().getTime().toString(), title: name};
      setList([...list, newItem]);
      setName('');
      setAlert({
        show: true,
        msg: 'Item added successfully',
        type: 'success'
      });
    }
  }

  const clearList = () => {
    const alertObj = {show: true, msg:'List Cleared', type:'success'};
    setAlert(alertObj);
    setList([]);
  }

  const clearItem = (itemId) => {
    setList(list.filter((item) => item.id !== itemId));
    const alertObj = {show: true, msg:'Item Cleared', type:'success'};
    setAlert(alertObj);
  }

  const activateEditMode = (itemId, currVal) => {
    setEditId(itemId);
    setIsEditing(true);
    setName(currVal);
  }

  const removeAlert = () => {
    const alertObj = {show: false, msg:'', type:''};
    setAlert(alertObj);
  }

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(list))
  }, [list]);

  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={removeAlert} list={list}/>}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input type='text' className='grocery' placeholder='e.g. Milk' 
          value={name} onChange={(e) => {setName(e.target.value)}}/>
        <button type='submit' className='submit-btn'>
          {isEditing ? 'Edit' : 'Submit'}
        </button>
      </div>
    </form>
    {list.length > 0 && (
      <div className='grocery-container'>
        <List items={list} edit={activateEditMode} clear={clearItem}/>
        <button className='clear-btn' onClick={clearList}>Clear Items</button>
      </div>
    )}        
  </section>
}

export default App
