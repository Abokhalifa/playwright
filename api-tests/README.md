API Test Framework (Maven + TestNG + RestAssured)

Quickstart

- Build and run tests with default base URL (https://httpbin.org):

```bash
mvn test -f api-tests/pom.xml
```

- Run tests against a different base URL:

```bash
mvn test -f api-tests/pom.xml -Dapi.baseUrl=https://example.com
```

What’s included

- `pom.xml` — Maven configuration with RestAssured and TestNG
- `testng.xml` — TestNG suite
- `src/main/java/com/example/api/ApiClient.java` — small RestAssured wrapper
- `src/test/java/com/example/tests/*` — example GET and POST tests

Notes

- Tests use the `api.baseUrl` system property to override the base URI.
- Examples target `https://httpbin.org` which echoes requests (useful for examples).
