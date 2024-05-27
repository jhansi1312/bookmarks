import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BookMarkServices from './services/BookMarkServices';


const BookMarkDet = () => {

    const [bookmark, setBookmark]= useState({})

    const {topic} = useParams()

    const navigator = useNavigate()

    useEffect(() => {
        BookMarkServices
                        .getBookMarkByTitle(topic)
                        .then(res => res.data)
                        .then(res => {
                            setBookmark(res)
                        })

            // console.log(save);
              
    },[])

    function back(){
        navigator("/bookmark-list")
    }

  return (
    <div className='container'>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>Bookmark id</th>
                    <th>title</th>
                    <th>Description</th>
                    <th>Link</th>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td>{bookmark.id}</td>
                    <td>{bookmark.title}</td>
                    <td>{bookmark.description}</td>
                    <td>{bookmark.link}</td>
                </tr>
            </tbody>
        </table>
        <button className='btn btn-danger' onClick={() => back()}>Back</button>
    </div>
  )
}

export default BookMarkDet