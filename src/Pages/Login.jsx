
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div>
        <div class="min-h-screen flex items-center justify-center">
    
            <div class=" mx-auto max-w-md p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
            
            
                <div class=" mb-6">
                    <Link to="">
                        <img class="h-12 w-auto block dark:hidden" src="" alt="logo"/>
                    </Link>
                </div>
            
                <form class="space-y-6" action="" method="post" id="login-form">
                    <h4 class="text-2xl font-bold text-gray-800 dark:text-gray-100">Sign in to account</h4>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Enter your email / phone & password to login</p>

                
                    <div>
                    <label for="loginId" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address</label>
                    <input 
                        id="loginId" 
                        name="loginId" 
                        type="text" 
                        required 
                        placeholder="Email or Phone"
                        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                    />
                    </div>

                
                    <div>
                        <label for="loginPass" class="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <div class="relative">
                            <input 
                            id="loginPass" 
                            name="loginPass" 
                            type="password" 
                            required 
                            placeholder="*********"
                            class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 px-3 py-2 shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-100"
                            />
                            
                            <button type="button" class="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                            👁
                            </button>
                        </div>
                    </div>

                
                    <div class="flex items-center justify-between">
                        <label class="flex items-center space-x-2">
                            <input id="checkbox1" type="checkbox" class="rounded text-blue-600 focus:ring-blue-500"/>
                            <span class="text-sm text-gray-600 dark:text-gray-400">Remember password</span>
                        </label>
                    </div>

                    <button 
                    type="submit" 
                    class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg shadow-md transition"
                    >
                    Log in
                    </button>

                </form>

            
                <div class="mt-6 text-center">
                    <Link to="" class="text-sm text-blue-600 hover:underline">Forgot Password?</Link>
                </div>

                <p class="mt-4 text-sm text-center text-gray-600 dark:text-gray-400">
                    Don't have an account?
                    <Link to="" class="text-blue-600 hover:underline">Create Account</Link>
                </p>

            </div>
        </div>
    </div>
  )
}

export default Login