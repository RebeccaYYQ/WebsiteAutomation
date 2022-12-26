Feature: Automate DV dalies

  Scenario Outline: As a user, I can log into Dappervolk

    Given I am on the <page> page
    When I login with <username> and <password>

    Examples:
      | page  | username | password             |
      | login | Birdieee |  |

  Scenario Outline: Do dailies
    
    Given I am on the <page> page
    When I do the <town> dailies

    Examples:
    | page   |
    | Louise |