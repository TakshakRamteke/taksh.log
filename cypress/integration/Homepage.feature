Feature: Check main page

  I want to test the home page 
  
  Scenario: Opening the home page of this website
    Given I open "home" page
    Then I see "This will be Home Page" as "h1"