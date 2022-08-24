import { useState, useEffect, createContext, useMemo } from 'react'

import { Routes, Route } from 'react-router-dom'

import Wrapper from '../Wrapper/Wrapper'
import Form from '../Form/Form'
import Posts from '../Posts/Posts'
import Counter from '../Counter/Counter'
import SinglePost from '../SinglePost/SinglePost'
import PersonalInfo from '../PersonalInfo/PersonalInfo'

import axios from 'axios'

import './App.css'

interface Post {
  id: number,
  title: string,
  url: string
}

interface StateProperties {
  posts: Post[]
  user: User
}

interface User {
  name: string
}

export const AppContext = createContext<StateProperties>({
  posts: [],
  user: {
    name: 'Yulan'
  }
})

const App = () => {

  const [isFetched, setIsFetched] = useState(true)
  const [posts, setPosts] = useState([])

  const user = useMemo(() => {
    return {
      name: 'Yulan'
    }
  }, [])

  const fetchingData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos?_limit=50')

    const data = await response.data

    setPosts(data)
  }
  
  useEffect(() => {
    if(isFetched) {
      fetchingData()
    }
    setIsFetched(false)
  }, [isFetched])

  return (
    <AppContext.Provider value={{posts, user}}>
      <div className="App">
        <Routes>
            <Route path="/" element={<Wrapper/>}>
              <Route index element={<Posts/>}/>
              <Route path="form" element={<Form/>}/>
              <Route path="counter" element={<Counter/>}/>
              <Route path="personal" element={<PersonalInfo/>}/>
              <Route path="posts/:id" element={<SinglePost/>}/>
            </Route>
        </Routes>
      </div>
    </AppContext.Provider>
  )
}

export default App