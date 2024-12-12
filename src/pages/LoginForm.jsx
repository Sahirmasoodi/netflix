import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import LoadingCircle from "../components/Loading";

const LoginForm = () => {
  let [isSignIn,setIsSignIn] = useState(true)
  const [loader,setLoader] = useState(false)
  let[type,setType] = useState(true)
  let {register,handleSubmit,control,formState:{errors}} = useForm()
  const navigate = useNavigate()
  function handleForm(e){
   e.preventDefault()
   setIsSignIn(!isSignIn)
  }
  function handleType(e){
    e.preventDefault()
    setType(!type)
  }
  function submitForm({email,password,name}){
  //  isSignIn ? loginUser()
  //  : SignupUser(email,password,name)
   if(isSignIn){
    setLoader(true)
    setTimeout(() => {
      navigate('/browser')
    }, 2000);
   }
   else if(!isSignIn){
    setLoader(true)
    setTimeout(() => {
      alert('user created successfully')
      setLoader(false)

    }, 2000);
    
   }
  
   
  }
  return (
   
      <div className={`bg-black bg-opacity-80 p-8 shadow-xl shadow-black max-w-sm w-full min-w-80 absolute mx-auto right-0 left-0 ${isSignIn ? 'my-44' : 'my-36'}`}>
        <h2 className="text-3xl font-bold text-white mb-6">
         {isSignIn ? " Sign In" :" Sign Up"}
        </h2>
        <form onSubmit={handleSubmit(submitForm)} noValidate>
        {
          !isSignIn &&
          <div className="">
          <strong className="text-red-600 text-sm">{errors?.name?.message}</strong>
            <input
              type="text"
              className="w-full px-4 py-4 bg-opacity-50 border border-gray-400 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600 mb-4 focus:border-none"
              placeholder="Full name"
              {...register('name',{
                required:{
                  value:true,
                  message:"*"
                },
                minLength:{
                  value:5,
                  message:'invalid name'
                }
              })}
            />
          </div>
          
        }
          <div className="mb-4">
            <strong className="text-red-600 text-sm">{errors?.email?.message}</strong>
            <input
              type="email"
              className="w-full px-4 py-4 bg-opacity-50 border border-gray-400 rounded-md bg-black text-white focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-none"
              placeholder={isSignIn ?"Email or mobile number" : "Email"}
              {
                ...register('email',{
                  required:{
                    value:true,
                    message:'*'
                  },
                  pattern:{
                    value:/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/,
                    message:'enter valid email'
                  }
                })
              }
            />
          </div>
          <div className="mb-6">
          <strong className="text-red-600 text-sm">{errors?.password?.message}</strong>
            <input 
              type={type ? 'password' :"text"}
              className="w-full px-4 py-4 border border-gray-400 rounded-md bg-opacity-50 bg-black text-white  focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-none"
              placeholder="Password"
              {
                ...register('password',{
                  required:'*',
                  pattern:{
                    value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                    message:'use strong password'
                  }
                  
                })
              }
            />
            {
              isSignIn && 
            <button className="text-gray-500 ms-3 text-sm" onClick={handleType}>show password </button>

            }
            
          </div>
          <button
            type="submit"
            className="flex justify-around w-full py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 transition"
          >
            {isSignIn ? " Login" :" Sign Up"}
            { loader ?  <LoadingCircle/> :<></> }
          </button>
        </form>
        <div className="flex justify-between items-center text-gray-500 text-sm mt-4">
          <p>
            <input type="checkbox" className="mr-2" />
            Remember Me
          </p>
          <a href="#" className="hover:underline">
            Need Help?
          </a>
        </div>
        <p className="text-gray-500  mt-6">
        {isSignIn ? "New to Netflix? " :"Already a user? "}
          {" "}
          
          <button onClick={handleForm}  className="text-white hover:underline">
        {isSignIn ? "  Sign up now. " :"Login "}
          
          </button>
        </p>
        <p className="text-sm text-gray-500 mt-6">This page is protected by Google reCAPTCHA to ensure you're not a bot. </p>
      </div>
 
  );
};

export default LoginForm;


