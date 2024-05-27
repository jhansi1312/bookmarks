import React from 'react'

import axios from 'axios'

const apiLink='http://localhost:8080/api/bookmarks/'

class BookMarkServices{

    getAllBookMarks = ( () => axios.get(apiLink))

    addBookMarkServices =  (bookMark) => axios.post(apiLink, bookMark)

    getBookMarkByTitle = (title) => axios.get(apiLink+title)

    updateBookMark = (title,bookMark) => axios.patch(apiLink+title,bookMark)

    deleteBookMarkServices = (title) => axios.delete(apiLink+title)


}

export default new BookMarkServices();