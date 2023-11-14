import { createSlice, nanoid } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: 1, title: 'Hey html', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium sunt, non ab reiciendis incidunt, adipisci aliquam asperiores tenetur eaque voluptatem nostrum similique numquam beatae inventore repellat consectetur laudantium eligendi' },
    { id: 2, title: 'Hey html5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium sunt, non ab reiciendis incidunt, adipisci aliquam asperiores tenetur eaque voluptatem nostrum similique numquam beatae inventore repellat consectetur laudantium eligendi' },
  ],
  reducers: {

    // postAdded :  (state, action)=> {
    //   state.push(action.payload)
    // }

    // postAdded: {
    //   reducer: (state, action) => { state.push(action.payload) },
    //   prepare: (title, content) => {
    //     return {
    //       payload: {
    //         id: nanoid(),
    //         title,
    //         content
    //       }
    //     }
    //   }
    // },

    postAdded: {
      reducer: (state, action) => { state.push(action.payload) },
      prepare: (title, content) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        }
      }
    }




  }
});






export const { postAdded } = postSlice.actions;

export default postSlice.reducer;
