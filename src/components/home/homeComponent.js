import React, { useState, useEffect } from 'react'
import './home.css'

const Home = (props) => {
    const [titleList, setTitleList] = useState([])
    const [addItem, setAddItem] = useState({ title: '', description: ''})
    const [addButtonClicked, setAddButtonClicked] = useState(false)
    const [searchBoxKey, setSearchBoxKey] = useState('')
    const [filterTitleList, setFilterTitleList] = useState([])

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside)

        const localData = JSON.parse(localStorage.getItem('titleList'))
        if (localData) {
            setTitleList(localData)
        }

        return () => {
            window.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    useEffect(() => {
        let localData = JSON.parse(localStorage.getItem('titleList'))
        if (localData == null) {
            setTitleList(props.titleList)
            localStorage.setItem('titleList', JSON.stringify([]))
        } else if (props.titleList.length > localData.length) {
            setTitleList(props.titleList)
            localStorage.setItem('titleList', JSON.stringify(props.titleList))
        } else if (props.titleList.length < localData.length) {
            props.setDataFromLocal(localData)
        }
    }, [props.titleList])

    const handleClickOutside = (event) => {
        if (document.getElementById('addItemDiv') && !document.getElementById('addItemDiv').contains(event.target)) {
            setAddButtonClicked(false)
            setAddItem({ title: '', description: '' })
        }
    }

    const onChangeHandler = (event, type) => {
        if (type === 'title') {
            setAddItem({ ...addItem, title: event.target.value })
        } else {
            setAddItem({ ...addItem, description: event.target.value })
        }
    }

    const submitCancelHandler = (type) => {
        if (type === 'submit') {
            const localData = JSON.parse(localStorage.getItem('titleList'))
            localData.push(addItem)
            localStorage.setItem('titleList', JSON.stringify(localData))
            props.setTitleList(addItem)
            setTitleList([...titleList, {id: titleList.length + 1, ...addItem}])
            setAddItem({ title: '', description: '' })
            setAddButtonClicked(false)
        } else {
            setAddItem({ title: '', description: '' })
            setAddButtonClicked(false)
        }
    }

    const showAddList = () => {
        const addNewList = (
            <div className='addItemDiv' id='addItemDiv'>
                <div className='addItemDivInner'>
                    <h1>Add Title</h1>
                    <input className='addTitleInput' placeholder='Title Heading' onChange={(event) => onChangeHandler(event, 'title')} />
                    <h2>Title Description</h2>
                    <textarea className='addDescInput' placeholder='Add Description' onChange={(event) => onChangeHandler(event, 'desc')} />
                    <div>
                        <button onClick={() => submitCancelHandler('submit')}>Submit</button>{' '}
                        <button onClick={() => submitCancelHandler('cancel')}>Cancel</button>
                    </div>
                </div>
            </div>
        )
        return addNewList
    }

    const addListHandler = () => {
        setAddButtonClicked(true)
        showAddList()
    }

    const showTitleList = (newListData) => {
        const newList = (
            <div className='itemLists'>
                {newListData.map(item => {
                    return (
                        <div className='itemList' key={item.id}>
                            <p className='titleText'>{item.title.length > 18 ? item.title.slice(0, 18) + '...' : item.title}</p>
                            <p className='descriptionText'>{item.description.length > 80 ? item.description.slice(0, 60) + '...' : item.description}</p>
                        </div>
                    )
                })}
            </div>
        )
        return newList
    }

    const searchBoxHandler = (event) => {
        const searchKey = event.target.value.toLowerCase()
        setSearchBoxKey(searchKey)
        const searchList = [...titleList].filter(item => item.title.toLowerCase().includes(searchKey))
        setFilterTitleList(searchList)
    }

    return (
        <div className='parentDiv'>
            <div className='parentTo1' />
            <div className='parentTo2' />
            <div className='mainContainer'>
                <div className='searchBoxDiv'>
                    <input className='searchBox' placeholder='Search Items' onChange={searchBoxHandler}/>
                </div>
                <div className='itemsListsParentDiv'>
                    <span onClick={addListHandler}>+</span>
                    <p className='headingItems'>ITEMS</p>
                    {searchBoxKey.length ? showTitleList(filterTitleList) : null}
                    {!searchBoxKey.length && titleList.length ? showTitleList(titleList) : null}
                </div>
                {addButtonClicked ? showAddList() : null}
            </div>
        </div>
    )
}

export default Home


