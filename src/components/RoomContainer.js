import React from "react"
import RoomFilter from "./RoomFilter.js"
import RoomList from "./RoomList"
import Loading from "./Loading"
import { RoomConsumer, RoomContext, withRoomConsumer } from "../context"

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context

  if (loading) {
    return <Loading></Loading>
  }

  return (
    <>
      <RoomFilter rooms={rooms}></RoomFilter>
      <RoomList rooms={sortedRooms}></RoomList>
    </>
  )
}

export default withRoomConsumer(RoomContainer)

// import React from "react"
// import RoomFilter from "./RoomFilter.js"
// import RoomList from "./RoomList"

// import { RoomConsumer } from "../context"
// import Loading from "./Loading"

// const RoomContainer = () => {
//   return (
//     <>
//       <RoomConsumer>
//         {(value) => {
//           const { loading, sortedRooms, rooms } = value

//           if (loading) {
//             return <Loading></Loading>
//           }

//           return (
//             <div>
//               Hello From rooms container
//               <RoomFilter rooms={rooms}></RoomFilter>
//               <RoomList rooms={sortedRooms}></RoomList>
//             </div>
//           )
//         }}
//       </RoomConsumer>
//     </>
//   )
// }

// export default RoomContainer
