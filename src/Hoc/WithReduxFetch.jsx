import { Box } from "@mui/material";
import { useEffect } from "react";
import { MagnifyingGlass } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";

function WithReduxFetch(WrappedComponent, action, selector) {
    return function ReduxFetchComponent(props) {

        const dispatch = useDispatch();

        useEffect(() => {
            dispatch(action());
        }, [dispatch]);


        const { isloading, error, ...category } = useSelector(selector);


        if (isloading) {
            return (
                <Box sx={{ display: 'flex',justifyContent:'center' }}>
                    <MagnifyingGlass
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="magnifying-glass-loading"
                        wrapperStyle={{}}
                        wrapperClass="magnifying-glass-wrapper"
                        glassColor="#c0efff"
                        color="#2e66d8"
                    />
                </Box>
            )

        }

        if (error) {
            return (
                <p>{error}</p>
            )
        }


        return <WrappedComponent {...props}  {...category} />
    }

}
export default WithReduxFetch;