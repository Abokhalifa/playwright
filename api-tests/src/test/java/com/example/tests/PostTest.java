package com.example.tests;

import com.example.api.ApiClient;
import io.restassured.response.Response;
import org.testng.Assert;
import org.testng.annotations.Test;
import java.util.HashMap;
import java.util.Map;

public class PostTest extends BaseTest {

    @Test
    public void testPost() {
        ApiClient client = new ApiClient();
        Map<String, Object> body = new HashMap<>();
        body.put("name","tester");
        body.put("active", true);
        Response res = client.post("/post", body);
        Assert.assertEquals(res.getStatusCode(), 200);
        Assert.assertTrue(res.jsonPath().getMap("json").containsKey("name"));
    }
}