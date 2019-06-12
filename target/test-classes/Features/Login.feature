Feature: Login feature

Scenario Outline: Login Test scenario

Given user is on Landingpage
When user clicks Login link
Then user enters "<username>" and "<password>"
And user clicks Login button
Then user is on homepage 
Then username is displayed on homepage

Examples:
| username               | password |
|test10103@mailinator.com| qwerty   |
|abc                     | sdfd     |