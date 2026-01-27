package com.example.tests;

import com.example.api.ApiClient;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;
import java.util.HashMap;
import java.util.Map;

public class GetTest extends BaseTest {

    @Test
    public void testGet() {
        ApiClient client = new ApiClient();
        Map<String, String> q = new HashMap<>();
        q.put("foo","bar");
        Response res = client.get("/get", q);
        Assert.assertEquals(res.getStatusCode(), 200);
        Assert.assertTrue(res.jsonPath().getMap("args").containsKey("foo"));
    }
}