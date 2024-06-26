import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routs/Routs.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TrainerBookingProvider from './Providers/TrainerBookingProvider.jsx'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TrainerBookingProvider>
      <AuthProvider>
        <HelmetProvider>
          <RouterProvider router={router} />
        </HelmetProvider>
        <Toaster />
      </AuthProvider>
      </TrainerBookingProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
