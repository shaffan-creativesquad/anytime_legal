import React, {useEffect} from 'react'
import BlogsHero from '../sections/BlogsHero'
import BlogList from '../sections/BlogList'

function Blogs() {
    
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div>
        <BlogsHero/>
        <BlogList/>
    </div>
  )
}

export default Blogs