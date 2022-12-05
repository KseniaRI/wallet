import { StyledClipLoader } from "./Loader.styled";
import { getIsAuthorising } from "redux/auth/auth-selectors";
import { useSelector } from "react-redux";

export const Loader = () => {
const isAuthorising = useSelector(getIsAuthorising);
return  <StyledClipLoader loading={isAuthorising} color="#4A56E2" size={20} />
}