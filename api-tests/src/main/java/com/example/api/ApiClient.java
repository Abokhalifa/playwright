package com.example.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import java.util.Map;

public class ApiClient {
    private final RequestSpecification req;

    public ApiClient() {
        this.req = RestAssured.given().contentType("application/json");
    }

    public Response get(String path, Map<String, ?> queryParams) {
        if (queryParams != null) {
            return req.queryParams(queryParams).when().get(path).then().extract().response();
        } else {
            return req.when().get(path).then().extract().response();
        }
    }

    public Response post(String path, Object body) {
        return req.body(body).when().post(path).then().extract().response();
    }
}