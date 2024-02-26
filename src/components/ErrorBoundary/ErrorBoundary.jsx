"use client"
import React from "react"
import Header from "../Header/Header"
import Image from "next/image"
import ErrorImage from "../../../public/errorImage.jpg"
import ButtonStyle from "../ButtonStyle/ButtonStyle"

export default class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props)
   
      // Define a state variable to track whether is an error or not
      this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI
   
      return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
      // You can use your own error logging service here
      console.log({ error, errorInfo })
    }
    render() {
      // Check if the error is thrown
      if (this.state.hasError) {
        // You can render any custom fallback UI
        return (
          <>
            <Header form={false} />
            <main className="flex min-h-screen text-white flex-col items-center bg-gray-900 ">
                <Image
                    className='mt-40'
                    src={ErrorImage}
                    priority={false}
                    alt="error image"
                    width={500}
                    height={200}
                />
                <h3 className='mt-10 mb-10'>ERROR! PLEASE BACK TO SAVE ZONE</h3>
                <ButtonStyle
                    className="bg-amber-400 p-4 text-black rounded-lg"
                    label={"BACK TO SAFE ZONE YOUNG PADAWANG"}
                    onClick={() =>{ 
                        this.setState({ hasError: false })
                        window.location.replace("/");
                    }}
                />
            </main>
          </>
        )
      }
   
      // Return children components in case of no error
   
      return this.props.children
    }
  }
   