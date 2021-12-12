import {createContext, useState} from 'react'
const FeedbackContext = createContext();

export const FeedbackProvider = ({children})=>{
  //feedback dizisini useState'e atıyoruz
  const [feedback,setFeedback] = useState([
    {
      id:1,
      rating:5,
      text:'this item is from context'
    },
    {
      id:2,
      rating:6,
      text:'this second item is from context2'
    },
    {
      id:3,
      rating:9,
      text:'this third item is from context3'
    },
  ])

  const [feedbackEditedItem,setFeedbackEditedItem] = useState({
    item:{},
    edit:false
  });


const editFeedback = (item)=>{
    setFeedbackEditedItem({
      item,
      edit:true
    });
  }

  //set item to be updated
const deleteFeedback= (id)=> {
    setFeedback((prev)=>{
      return prev.filter(p=> p.id !== id);
    })
  }
//add feedback
const addFeedback = (newFeedback)=>{
  setFeedback([newFeedback,...feedback]);
  }

const updateFeedback = (id,updatedItem)=>{
  setFeedback((prev)=>{
    return prev.map((item)=> item.id !== id ? item : updatedItem)
  })
}
  //Context'in provider'ına feedback dizisini aktarıyoruz. Bu şekilde FeedbackContext nesnesine bu dizi atanmış olur
  return <FeedbackContext.Provider value={{ 
    feedback,
     addFeedback,
     deleteFeedback,
     editFeedback,
     feedbackEditedItem,
     updateFeedback,
     setFeedbackEditedItem
   }}>
    {children}
  </FeedbackContext.Provider>
}

export default FeedbackContext;