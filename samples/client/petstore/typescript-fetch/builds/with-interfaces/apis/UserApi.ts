/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  User,
} from '../models/index';
import {
    UserFromJSON,
    UserToJSON,
} from '../models/index';

export interface CreateUserRequest {
    body: User;
}

export interface CreateUsersWithArrayInputRequest {
    body: Array<User>;
}

export interface CreateUsersWithListInputRequest {
    body: Array<User>;
}

export interface DeleteUserRequest {
    username: string;
}

export interface GetUserByNameRequest {
    username: string;
}

export interface LoginUserRequest {
    username: string;
    password: string;
}

export interface UpdateUserRequest {
    username: string;
    body: User;
}

/**
 * UserApi - interface
 * 
 * @export
 * @interface UserApiInterface
 */
export interface UserApiInterface {
    /**
     * This can only be done by the logged in user.
     * @summary Create user
     * @param {User} body Created user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Creates list of users with given input array
     * @param {Array<User>} body List of user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    createUsersWithArrayInputRaw(requestParameters: CreateUsersWithArrayInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Creates list of users with given input array
     */
    createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Creates list of users with given input array
     * @param {Array<User>} body List of user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    createUsersWithListInputRaw(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Creates list of users with given input array
     */
    createUsersWithListInput(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * This can only be done by the logged in user.
     * @summary Delete user
     * @param {string} username The name that needs to be deleted
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * 
     * @summary Get user by user name
     * @param {string} username The name that needs to be fetched. Use user1 for testing.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    getUserByNameRaw(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>>;

    /**
     * Get user by user name
     */
    getUserByName(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User>;

    /**
     * 
     * @summary Logs user into the system
     * @param {string} username The user name for login
     * @param {string} password The password for login in clear text
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    loginUserRaw(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * Logs user into the system
     */
    loginUser(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
     * 
     * @summary Logs out current logged in user session
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    logoutUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Logs out current logged in user session
     */
    logoutUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

    /**
     * This can only be done by the logged in user.
     * @summary Updated user
     * @param {string} username name that need to be deleted
     * @param {User} body Updated user object
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApiInterface
     */
    updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI implements UserApiInterface {

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUserRaw(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        const body: any = UserToJSON(requestParameters.body);

        const request: runtime.RequestOpts = {
            path: `/user`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Create user
     */
    async createUser(requestParameters: CreateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createUserRaw(requestParameters, initOverrides);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInputRaw(requestParameters: CreateUsersWithArrayInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUsersWithArrayInput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        const body: any = requestParameters.body.map(UserToJSON);

        const request: runtime.RequestOpts = {
            path: `/user/createWithArray`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithArrayInput(requestParameters: CreateUsersWithArrayInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createUsersWithArrayInputRaw(requestParameters, initOverrides);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInputRaw(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling createUsersWithListInput.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        const body: any = requestParameters.body.map(UserToJSON);

        const request: runtime.RequestOpts = {
            path: `/user/createWithList`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Creates list of users with given input array
     */
    async createUsersWithListInput(requestParameters: CreateUsersWithListInputRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createUsersWithListInputRaw(requestParameters, initOverrides);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUserRaw(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling deleteUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};




        const request: runtime.RequestOpts = {
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Delete user
     */
    async deleteUser(requestParameters: DeleteUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.deleteUserRaw(requestParameters, initOverrides);
    }

    /**
     * Get user by user name
     */
    async getUserByNameRaw(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling getUserByName.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};




        const request: runtime.RequestOpts = {
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     * Get user by user name
     */
    async getUserByName(requestParameters: GetUserByNameRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.getUserByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logs user into the system
     */
    async loginUserRaw(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling loginUser.');
        }

        if (requestParameters.password === null || requestParameters.password === undefined) {
            throw new runtime.RequiredError('password','Required parameter requestParameters.password was null or undefined when calling loginUser.');
        }

        const queryParameters: any = {};

        if (requestParameters.username !== undefined) {
            queryParameters['username'] = requestParameters.username;
        }

        if (requestParameters.password !== undefined) {
            queryParameters['password'] = requestParameters.password;
        }

        const headerParameters: runtime.HTTPHeaders = {};




        const request: runtime.RequestOpts = {
            path: `/user/login`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        if (this.isJsonMime(response.headers.get('content-type'))) {
            return new runtime.JSONApiResponse<string>(response);
        } else {
            return new runtime.TextApiResponse(response) as any;
        }
    }

    /**
     * Logs user into the system
     */
    async loginUser(requestParameters: LoginUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.loginUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};




        const request: runtime.RequestOpts = {
            path: `/user/logout`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Logs out current logged in user session
     */
    async logoutUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logoutUserRaw(initOverrides);
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling updateUser.');
        }

        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling updateUser.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        const body: any = UserToJSON(requestParameters.body);

        const request: runtime.RequestOpts = {
            path: `/user/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This can only be done by the logged in user.
     * Updated user
     */
    async updateUser(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateUserRaw(requestParameters, initOverrides);
    }

}
