import { useContext } from "react"
import { ContactContext } from "../../../context/ContactContext"

// const {progressValue, setProgressValue, isEmailLoading, setIsEmailLoading, setIsEmailSent} = useContext(ContactContext)

// export const raiseProgressValue = () => {
//     if (progressValue >= 0.99) {
//       setProgressValue(0)
//     } else {
//       setTimeout(() => {
//         setProgressValue(progressValue + 0.01)
//       }, 15)
//     }
//   }

//   export const raiseProgressValueTest = () => {
//     if (!isEmailLoading) {
//       setIsEmailLoading(true)
//     }
//     if (progressValue >= 0.99) {
//       setProgressValue(0)
//     } else {
//       setTimeout(() => {
//         setProgressValue((prevProgress:number) => prevProgress + 0.01)
//       }, 18)
//     }
//     setTimeout(() => {
//       setIsEmailLoading(false)
//       showSuccessMessage()
//       setProgressValue(0)
//     }, 2000)
//   }

//   export const showSuccessMessage = () => {
//     setIsEmailSent(true)

//     setTimeout(() => {
//       setIsEmailSent(false)
//     }, 2000)
//   }