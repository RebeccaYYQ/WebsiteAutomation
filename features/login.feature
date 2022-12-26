Feature: Automate DV dalies

  Scenario Outline: As a user, I can log into Dappervolk

    Given I am on the login page
    When I login with <username> and <password>


    Examples:
      | username | password             |
      | Birdieee |  |
