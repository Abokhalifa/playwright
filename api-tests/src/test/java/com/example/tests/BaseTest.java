package com.example.tests;

import io.restassured.RestAssured;
import org.testng.annotations.BeforeSuite;

public class BaseTest {

    @BeforeSuite
    public void setup() {
        String base = System.getProperty("api.baseUrl", "https://httpbin.org");
        RestAssured.baseURI = base;
    }
}