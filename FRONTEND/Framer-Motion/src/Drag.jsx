import React from 'react'
import { anticipate, motion } from "motion/react";

const Drag = () => {
  return (
    <>
   {/* <motion.div className="box"
   initial={{
    x:0,
    y:0,
   }}
   animate={{
    x:[0, 800,800,0,0],
    y: [0,0,300,300,0],
    rotate:[0, 360, 0, -360, 0]
   }}


   transition={{
    duration: 4,
    delay:1,
    repeat: Infinity,
   }}
   >
     
   </motion.div> */}
  <motion.div 
   whileHover={{
    backgroundColor: "#f9dada",
   }}
   whileTap={{
    scale:0.8,
   }}
   drag
   whileDrag={{
    backgroundColor: "blue",
    scale: 1.4
   }}
   dragConstraints={{
    left:100,
top: 100,
   }}

  //  dragDirectionLock  ="ture"
    className="box">

  </motion.div>
   </>
  )
}

export default Drag