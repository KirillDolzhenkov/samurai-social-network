import { connect } from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    usersPageInitialStateType,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Users} from "./Users";

type mapStateToPropsType = {
    usersPage: usersPageInitialStateType
    pageSize: number
    totalUserCount: number
    currentPage: number
}

type mapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageValue: number)=> void
    setTotalUsersCount: (countValue: number)=>void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType=> {
    return {
        usersPage: state.usersPage,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
}



const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType=> {
        return {
            follow: (userId)=>{
                dispatch(followAC(userId));
            },
            unfollow: (userId)=>{
                dispatch(unfollowAC(userId));
            },
            setUsers: (users)=>{
                dispatch(setUsersAC(users));

            },
            setCurrentPage: (pageValue)=> {
                dispatch(setCurrentPageAC(pageValue));
            },
            setTotalUsersCount: (countValue)=> {
                dispatch(setTotalUsersCountAC(countValue))
            }
        }

}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export {
    UsersContainer
}