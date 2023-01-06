# Feature: Automate DV dalies

#   Scenario Outline: As a user, I can log into Dappervolk

#     Given I am on the <page> page
#     When I login with <username> and <password>

#     Examples:
#       | page  | username | password             |
#       | login | Birdieee |  |

#   Scenario Outline: Do dailies
    
#     Given I am on the <page> page
#     When I do the <page> dailies

#     Examples:
#     | page   |
#     | Louise |

Feature: Automate Figment exploring

    Scenario Outline: As a user, I can explore on Figment

      Given I am on the <page> page
      # When I change active figment pet
      # When I explore <region>

      Examples:
      | page    | region     |
      | Figment | Spookytown |

