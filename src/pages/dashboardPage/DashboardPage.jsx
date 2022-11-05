import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { SharedLayout } from "components/shared-layout/SharedLayout"

const DashboardPage = () => {
    return (
        <>
            <SharedLayout />
            <Suspense fallback={<h1>Loading...</h1>}>
                <Outlet />
            </Suspense>
        </>   
    )
}

export default DashboardPage;