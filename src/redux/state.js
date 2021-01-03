import {rerenderEntireTree} from "../render";

let state = {
  Messages : {
    DialogsData : [
      {id: 1, name: "Teddy"},
      {id: 2, name: "Maria"},
      {id: 3, name: "Ezra"},
      {id: 4, name: "Evgenia"},
      {id: 5, name: "Lars"}
    ],

    MessagesData : [
      {id: 1, text: "How do you feel?"},
      {id: 2, text: "Let's talk about React!"},
      {id: 3, text: "Yep! I love pizza."},
      {id: 4, text: "It's amazing"},
      {id: 5, text: "Functional programming is great!"}
    ],
  },

  Data : {
    PostsData : [
      {
        id: 1,
        heading: "Words of the day",
        content: "Flexible Thinking in a Constantly Changing World"
      },
      {
        id: 2,
        heading: "Some words",
        content: "The default network governs our interior mental life—the dialogue we have with ourselves, both consciously and subconsciously."
      },
      // {id: 3, content: "Ezra"},
      // {id: 4, content: "Evgenia"},
      // {id: 5, content: "Lars"}
    ],
    newPostText : "some text",
  },

  Friends : [
    {id : 1, fullName : "Patrick Murphy"},
    {id : 2, fullName : "Conor Ryan"},
    {id : 3, fullName : "Ellie Brennan"},
  ]

}

export const addPostFunc= (postText) => {
  // debugger;
  let newPost = {id : 3, heading : "", content : postText};
  // state.Data.newPostText.push(newPost);
  state.Data.PostsData.push(newPost);
  rerenderEntireTree(state);
}

export const addSymbFunc= (symbols) => {
  // debugger;
  // let newPost = {id : 5, heading : "", content : symbols};
    state.Data.newPostText = symbols;
  // state.Data.PostsData.push(newPost); изменял данные внутри PostsData, а render делал из newPostText
  rerenderEntireTree(state);
}


export default state;