import * as API from "./index";

export const login = params => 
API.GET('/login',params)