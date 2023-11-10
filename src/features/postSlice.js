import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
  name: 'posts',
  initialState: [
    { id: 1, title: 'Hey html', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium sunt, non ab reiciendis incidunt, adipisci aliquam asperiores tenetur eaque voluptatem nostrum similique numquam beatae inventore repellat consectetur laudantium eligendi' },
    { id: 2, title: 'Hey html5', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem accusantium sunt, non ab reiciendis incidunt, adipisci aliquam asperiores tenetur eaque voluptatem nostrum similique numquam beatae inventore repellat consectetur laudantium eligendi' },
  ],
  reducers: {}
});


export const { selectAllPosts } = postSlice.actions;

export default postSlice.reducer;
