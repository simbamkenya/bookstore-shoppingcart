import React, { useState } from "react";
import { useSelector, useDispatch} from 'react-redux'
import { filterAuthor, filterCategory} from "../store/Actions/actions"


function Sidebar() {
  const books = useSelector(state => state.books)
  const dispatch = useDispatch()

  // const categories = [...new Set(books.bookList.map(d => d.category))]
  const categories = ['detective', 'romance']
  const authors = ['Sidney sheldon', 'Agatha christie', 'Nora roberts']
  console.log(categories)
  console.log(authors)

  return (
    <div className='w-48 bg-gray-100 fixed h-full'>
        <h2 className='text-lg uppercase font-medium mt-8 px-4'>Category</h2>
        <ul className='p-4 space-y-6 flex flex-col'>
            {categories.map(category => (
              <li className='' onClick={() => dispatch(filterCategory(category))}><a href='#' className='capitalize px-2 py-2 rounded-sm text-sm font-medium hover:bg-blue-200'>{category}</a></li>
            ))}
            
        </ul>
        <h2 className='text-lg uppercase font-medium mt-4 px-4'>Authors</h2>
        <ul className='p-4 space-y-6 flex flex-col w-48'>
           {authors.map(author => (
             <li className="" onClick={() => dispatch(filterAuthor(author))}><a href='#' className='px-2 py-2 rounded-sm text-sm font-medium hover:bg-blue-200'>{author}</a></li>
           ))}            
        </ul>
    </div>
  )
}

export default Sidebar