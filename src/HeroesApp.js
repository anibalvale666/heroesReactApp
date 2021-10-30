import React  from 'react'
import { AuthProvider } from './context/AuthContext'
import { TeamProvider } from './context/TeamContext'
import { AppRouter } from './routers/AppRouter'

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <TeamProvider>
                <AppRouter />
            </TeamProvider>
        </AuthProvider>
    )
}
