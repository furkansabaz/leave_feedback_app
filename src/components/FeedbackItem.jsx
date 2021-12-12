import Card from "./shared/Card"
import PropTypes from 'prop-types';
import {FaTimes,FaEdit}  from 'react-icons/fa'
import { useContext } from "react"
import FeedbackContext from "../context/FeedbackContext"


function FeedbackItem({item}) {
  //useContext metodu kendisine gönderilen Context nesnesi içindeki verileri kullanmamızı sağlar
  //mesela altta FeedbackContext nesnesindeki deleteFeedback metodunu çıkardık
  const {deleteFeedback,editFeedback} = useContext(FeedbackContext);

  return (
    <Card reverse={false}>
      <div className="num-display">{item.rating}</div>
      <button className="edit">
      <FaEdit onClick={()=>editFeedback(item)} color="purple"/>
      </button>
      <button onClick={()=>deleteFeedback(item.id)} className="close">
        <FaTimes color="purple"/>
      </button>
      <div className="text-display"> {item.text} </div>
    </Card>
  )
}
FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired
}
export default FeedbackItem



  // const handleClick = ()=>{
  //   setRating((prev)=>{
  //     console.log("Önceki Değeri : "+prev);
  //     return prev+1
  //   })
  // }