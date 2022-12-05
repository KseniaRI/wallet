import { Box } from "components/Box"
import { Loader } from "components/loader/Loader"
import { Suspense } from "react"
import { Outlet } from "react-router-dom"

export const Container = () => {
    return (
        <Box as="div"
            pl={85}
            pr={85}
            backgroundColor="backgroundColor">
            <Suspense fallback={<Loader/>}>
                <Outlet/>
            </Suspense>
        </Box>
    )
}