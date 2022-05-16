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
import {
    Order,
} from '../models';

export interface DeleteOrderRequest {
    orderId: string;
}

export interface GetOrderByIdRequest {
    orderId: number;
}

export interface PlaceOrderRequest {
    body: Order;
}

/**
 * 
 */
export class StoreApi extends runtime.BaseAPI {

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    async deleteOrderRaw(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling deleteOrder.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};




        const request: runtime.RequestOpts = {
            path: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * For valid response try integer IDs with value < 1000. Anything above 1000 or nonintegers will generate API errors
     * Delete purchase order by ID
     */
    async deleteOrder(requestParameters: DeleteOrderRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void> {
        await this.deleteOrderRaw(requestParameters, initOverrides);
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    async getInventoryRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<{ [key: string]: number; }>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["api_key"] = this.configuration.apiKey("api_key"); // api_key authentication
        }




        const request: runtime.RequestOpts = {
            path: `/store/inventory`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Returns a map of status codes to quantities
     * Returns pet inventories by status
     */
    async getInventory(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<{ [key: string]: number; }> {
        const response = await this.getInventoryRaw(initOverrides);
        return await response.value();
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    async getOrderByIdRaw(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.orderId === null || requestParameters.orderId === undefined) {
            throw new runtime.RequiredError('orderId','Required parameter requestParameters.orderId was null or undefined when calling getOrderById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};




        const request: runtime.RequestOpts = {
            path: `/store/order/{orderId}`.replace(`{${"orderId"}}`, encodeURIComponent(String(requestParameters.orderId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * For valid response try integer IDs with value <= 5 or > 10. Other values will generated exceptions
     * Find purchase order by ID
     */
    async getOrderById(requestParameters: GetOrderByIdRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Order> {
        const response = await this.getOrderByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Place an order for a pet
     */
    async placeOrderRaw(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Order>> {
        if (requestParameters.body === null || requestParameters.body === undefined) {
            throw new runtime.RequiredError('body','Required parameter requestParameters.body was null or undefined when calling placeOrder.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';



        const body: any = requestParameters.body,

        const request: runtime.RequestOpts = {
            path: `/store/order`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: body,
        }
        const response = await this.request(request, initOverrides);

        return new runtime.JSONApiResponse(response);
    }

    /**
     * Place an order for a pet
     */
    async placeOrder(requestParameters: PlaceOrderRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Order> {
        const response = await this.placeOrderRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
