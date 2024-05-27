import React, { useEffect, useState } from 'react'
// import BookMarkList from './BookMarkList'
import 'bootstrap/dist/css/bootstrap.css';
import BookMarkServices from './services/BookMarkServices';
import { useNavigate, useParams } from 'react-router-dom';
const BookMark = () => {

    const [title,setTitle] = useState('')
    const [description,setDescription] = useState('')
    const [link,setLink] = useState('')

    const navigator = useNavigate();

    const {tit}=useParams();

    useEffect(() => {
        if(tit){
            BookMarkServices
            .getBookMarkByTitle(tit)
            .then(
                res => res.data
            ).then(
                res => {
                    setTitle(res.title)
                    setDescription(res.description)
                    setLink(res.link)
                }
            )
        }
    },[])

    function addBookMark(e){
        e.preventDefault();
        const bookMark={title,description,link};
        bookMark.title = title;
        bookMark.description = description;
        bookMark.link = link;

        if(tit){
            BookMarkServices.updateBookMark(tit, bookMark)
                .then(
                    res => res.data
                ).then(
                    res => {
                        navigator('/bookmark-list')
                        return res;
                    }
                )

        }
        else{
            BookMarkServices.addBookMarkServices(bookMark)
                            .then(
                                res => {
                                    navigator('/bookmark-list')
                                    return res;
                                }
                            )
            }
            // navigator('/bookmark-list')
        return ;
    }

    function cancelUpdate(){
        navigator("/")
    }

    return (
        <>
        <h2 className='text-center'>Bookmark Details</h2>
        <div className='card col-md-6 m-auto'>
            <form> 
            
            <table className='table table-centered table-striped text-center'>
                <thead>
                </thead>
                <tbody>
                < tr>
                    <th><label >Title :</label></th>
                    <td><input type='text' value={title} placeholder='Enter the Title' onChange={(e) => setTitle(e.target.value)} ></input></td>
                </tr>
                < tr>
                    <th><label>Description :</label></th>
                    <td><input type='text' value={description} placeholder='Enter the Title' onChange={(e) => setDescription(e.target.value)}></input></td>
                </tr>
                < tr>
                    <th><label className=''>link :</label></th>
                    <td><input type='text' value={link} placeholder='Enter the Title' onChange={(e) => setLink(e.target.value)} ></input></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                    <button className='btn btn-danger' onClick={cancelUpdate} >cancel</button>
                    <button className='btn btn-success' style={{marginLeft:10}} onClick={(e) => addBookMark(e)}>submit</button> 
                    </td>
                    <td>
                       
                    </td>
                </tr>
                
                </tbody>

            </table>
            </form>
        
        </div>
        </>
    )
}

export default BookMark