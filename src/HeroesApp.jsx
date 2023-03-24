import { AppRoutes } from "./routes/AppRoutes"
import './assets/styles.css'
import { AuthProvider } from "./auth/context/AuthProvider"
export const HeroesApp = () => {
  return (
    <AuthProvider>
      <AppRoutes/>
    </AuthProvider>
  )
}
