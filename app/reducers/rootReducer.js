import { combineReducers } from 'redux'
import scoopReducer from './scoopReducer.js'
import factsReducer from './factsReducer.js'
import perspectivesReducer from './perspectivesReducer.js'

const rootReducer = combineReducers({
  scoop: scoopReducer,
  facts: factsReducer,
  perspectives: perspectivesReducer
})

export default rootReducer

// {{scoop: {
//     name: '',
//   },
//   facts: [
//     {
//       body: '',
//       source_link: '',
//       num_upvotes: 0,
//       num_downvotes: 0,
//       num_comments: 0,
//       comments: [
//         {
//           body: '',
//           num_upvotes: 0,
//           num_downvotes: 0,
//           num_comments: 0,
//           comments: []
//         }
//       ]
//     }
//   ],
//   perspectives: [
//     {
//       body: '',
//       num_upvotes: 0,
//       num_downvotes: 0,
//       num_comments: 0,
//       comments: [
//         {
//           body: '',
//           num_upvotes: 0,
//           num_downvotes: 0,
//           num_comments: 0,
//           comments: []
//         }
//       ]
//     }
//   ],
// }}
