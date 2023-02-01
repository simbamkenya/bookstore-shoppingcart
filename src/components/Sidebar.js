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
    <div className='w-96 bg-green-100'>
        <h2 className='text-lg uppercase font-medium mt-4 px-4'>Category</h2>
        <ul className='p-4 space-y-6 flex flex-col'>
            {categories.map(category => (
              <li className='' onClick={() => dispatch(filterCategory(category))}><a href='#' className='bg-slate-300 px-2 py-2 rounded-sm text-sm font-medium'>{category}</a></li>
            ))}
            
        </ul>
        <h2 className='text-lg uppercase font-medium mt-4 px-4'>Authors</h2>
        <ul className='p-4 space-y-6 flex flex-col w-48'>
           {authors.map(author => (
             <li className="" onClick={() => dispatch(filterAuthor(author))}><a href='#' className='bg-slate-300 px-2 py-2 rounded-sm text-sm font-medium'>{author}</a></li>
           ))}            
        </ul>
    </div>
  )
}

export default Sidebar