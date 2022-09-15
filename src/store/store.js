import { configureStore } from '@reduxjs/toolkit'
import Counter from './Counter'
import Task from './Task'

export default configureStore({
  reducer: {
      second: Counter,
      Task : Task
  }
})