$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Test scenario",
  "description": "",
  "id": "login-feature;login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "username is displayed on homepage",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature;login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "login-feature;login-test-scenario;;1"
    },
    {
      "cells": [
        "test10103@mailinator.com",
        "qwerty"
      ],
      "line": 14,
      "id": "login-feature;login-test-scenario;;2"
    },
    {
      "cells": [
        "abc",
        "sdfd"
      ],
      "line": 15,
      "id": "login-feature;login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Login Test scenario",
  "description": "",
  "id": "login-feature;login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"test10103@mailinator.com\" and \"qwerty\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "username is displayed on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_landingpage()"
});
formatter.result({
  "duration": 9207656676,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_login_link()"
});
formatter.result({
  "duration": 890365023,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test10103@mailinator.com",
      "offset": 13
    },
    {
      "val": "qwerty",
      "offset": 44
    }
  ],
  "location": "StepDefinition.user_enters_username_and_passsword(String,String)"
});
formatter.result({
  "duration": 1792130746,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 128378,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 26430,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.username_is_displayed_on_homepage()"
});
formatter.result({
  "duration": 29452,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login Test scenario",
  "description": "",
  "id": "login-feature;login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is on Landingpage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user clicks Login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"abc\" and \"sdfd\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks Login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "username is displayed on homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_is_on_landingpage()"
});
formatter.result({
  "duration": 6749442879,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_login_link()"
});
formatter.result({
  "duration": 821474879,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc",
      "offset": 13
    },
    {
      "val": "sdfd",
      "offset": 23
    }
  ],
  "location": "StepDefinition.user_enters_username_and_passsword(String,String)"
});
formatter.result({
  "duration": 158370191,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_clicks_login_button()"
});
formatter.result({
  "duration": 59281,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.user_is_on_homepage()"
});
formatter.result({
  "duration": 24543,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.username_is_displayed_on_homepage()"
});
formatter.result({
  "duration": 24166,
  "status": "passed"
});
});