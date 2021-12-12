import Card from './shared/Card';
import {useContext, useState, useEffect} from 'react'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import {v4 as uuidv4} from 'uuid'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
  const {addFeedback,feedbackEditedItem,updateFeedback} = useContext(FeedbackContext)
  const [text,setText] = useState('')
  const [rating,setRating] = useState(10)
  const [btnDisabled,setBtnDisabled] = useState(true);
  const [message,setMessage] = useState('')


  useEffect(()=>{
    if(feedbackEditedItem.edit === true){
      setBtnDisabled(false)
      setText(feedbackEditedItem.item.text)
      setRating(feedbackEditedItem.item.rating)
    }
  },[feedbackEditedItem])
  const handleTextChange = (e)=>{
    setText(e.target.value);
    setBtnDisabled(e.target.value.trim().length<10)
    setMessage(e.target.value.trim().length !== '' && e.target.value.trim().length <= 10 ? 'Text must be at least 10 characters' : null )
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    
    if(text.trim().length>10){
      
      const newFeedback = {
        text,
        rating
      }
      if(feedbackEditedItem.edit ===true){
      updateFeedback(feedbackEditedItem.item.id,{...newFeedback,id:feedbackEditedItem.item.id})
      return;
      }else {
        //add new feedback item
        newFeedback.id = uuidv4()
        addFeedback(newFeedback)
      }
      
    }
  }

   return (
     <Card >
       <form onSubmit={handleSubmit}>
         <h2>How would you rate your service with us?</h2>
         <RatingSelect select={(rateValue)=>setRating(rateValue)}/>
         <div className="input-group">
           <input type="text" placeholder='Write a review' value={text} onChange={handleTextChange}/>
           <Button type='submit' isDisabled={btnDisabled}>Send</Button>
         </div>
         {message && <div className='message'>{message}</div>}
       </form>
     </Card>
   )
 }
 
 export default FeedbackForm
 