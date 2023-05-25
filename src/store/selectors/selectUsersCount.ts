import {RootStoreType} from "store";


export const selectUsersCount = (state: RootStoreType): number => state.usersCount.count;
