import { useSelector } from "react-redux";
import { getIsAuthorising } from "redux/auth/auth-selectors";
import { StyledClipLoader } from "./Loader.styled";

export const Loader = () => {

    const isAuthorising = useSelector(getIsAuthorising);
    
    return  <StyledClipLoader loading={isAuthorising} color="#4A56E2" size={20} />
}