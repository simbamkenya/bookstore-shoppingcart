import { FILTER_CATEGORY, FILTER_AUTHOR } from '../Actions/actionTypes'

const initialState = {
    bookList: [
      { bookId: 1, author: "Sidney sheldon", bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
      { bookId: 2, author: "Sidney sheldon", bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
      { bookId: 3, author: "Sidney sheldon", bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'},
      { bookId: 4, author: "Sidney sheldon", bookName : "Range of Angles", price: 30, category: "romance", url: 'rage-of-angels.jpg'},
      { bookId: 5, author: "Agatha christie", bookName : "The man in a brown suit", price: 35, category: "thrill", url: 'the_man_in_a_brown_suit.jpg'},
      { bookId: 6, author: "Agatha christie", bookName : "The murder on the links", price: 45, category: "detective", url: 'the_murder_on_the_links.jpg'},
      { bookId: 7, author: "Agatha christie", bookName : "The mysterioius affar at styles", price: 30, category: "thrill", url: 'the_mysterious_affair_at_styles.jpg'},
      { bookId: 8, author: "Agatha christie", bookName : "The secret adversary", price: 30, category: "thrill", url: 'the_secret_adversary.jpg'},
      { bookId: 9, author: "Agatha christie", bookName : "Murder at the vicarage", price: 30, category: "thrill", url: 'murder_at_the_vicarage.jpg'},
      { bookId: 10, author: "Agatha christie", bookName : "The hound of death", price: 30, category: "thrill", url: 'the_hound_of_death.jpg'},
      { bookId: 11, author: "Agatha christie", bookName : "The ABC murders", price: 30, category: "thrill", url: 'the_abc_murders.jpg'},
      { bookId: 12, author: "Agatha christie", bookName : "Sad cypress", price: 30, category: "thrill", url: 'sad_cypress.jpg'},
      { bookId: 13, author: "Agatha christie", bookName : "Death on the nile", price: 30, category: "thrill", url: 'death_on_the_nile.jpg'},
      { bookId: 14, author: "Agatha christie", bookName : "Cards on the table", price: 30, category: "thrill", url: 'cards_on_the_table.jpg'},
      { bookId: 15, author: "Nora roberts", bookName : "Identity", price: 35, category: "romance", url: 'identity.jpg'},
    ],
  }


export const booksReducer = (state = initialState, action) => {
    console.log(initialState)
    switch (action.type) {
        case FILTER_CATEGORY:
            return {
                ...initialState,
                bookList: state.bookList.filter(item => item.category !== action.payload), 
            }
        case FILTER_AUTHOR:
            return {
                ...initialState,
                bookList: state.bookList.filter(item => item.author !== action.payload), 
            }
        default:
            return state;
    }
}