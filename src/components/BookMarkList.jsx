import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BookMarkServices from './services/BookMarkServices';

const BookMarkList = () => {

    console.log("hello")
    const [bookMarks,setBookMarks] = useState([])

    const [topic,setTopic] = useState('')

    const navigator = useNavigate();

    useEffect(() => {
         BookMarkServices.getAllBookMarks()
            .then(res => res.data)
            .then(res => setBookMarks(res))
    },[])

    

    function createBookMark(){
        navigator("/add-bookmark")
    }

    function getBookMarkByTitle(){
        navigator(`/bookmark/${topic}`)
    }

    function updateBookMark(e, title){
        e.preventDefault();
        navigator(`/add-bookmark/${title}`)
    }

    function deleteBookMark(title){
        return BookMarkServices.deleteBookMarkServices(title)
        
    }

  return (
    <div className='container'>
        <h1 className='text-center'>List of Bookmarks</h1>
        <button className='btn btn-primary' onClick={() =>createBookMark()}>Add Bookmark</button>
        <span className="d-flex justify-content-end">
            <input type="search" placeholder="Search" onChange={(e) => setTopic(e.target.value)} aria-label="Search">
            </input>
            <button className="btn btn-outline-success" type="submit" onClick={() => getBookMarkByTitle()}>Search</button>
        </span>
        <br/><br/>
        <form>
        <table className='table table-bordered table-striped text-center'>
            <thead>
                <tr>
                    <th>Bookmark id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Redirect</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookMarks
                        .map(
                            bookmark => 
                                <tr key={bookmark.id}>
                                    <td>{bookmark.id}</td>
                                    <td>{bookmark.title}</td>
                                    <td>{bookmark.description}</td>
                                    <td>{bookmark.link}</td>
                                    <td>
                                        <button className='btn btn-warning' onClick={(e) => updateBookMark(e, bookmark.title)}>update</button>
                                        <button className='btn btn-danger' onClick={() => deleteBookMark(bookmark.title)}>delete</button>
                                    </td>
                                </tr>
                        )
                }
            </tbody>
        </table>
        </form>
    </div>
  )
}

export default BookMarkList;