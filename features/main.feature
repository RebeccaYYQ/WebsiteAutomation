# Feature: Automate DV dalies

#   Scenario Outline: As a user, I can log into Dappervolk

#     Given I am on the <page> page
#     When I login to Dappervolk

#     Examples:
#       | page    |
#       | dvLogin |

#   Scenario Outline: Do dailies
    
#     Given I am on the <page> page
#     When I do the <page> dailies

#     Examples:
#     | page   |
#     | Louise |

Feature: Automate Figment exploring

    Scenario Outline: As a user, I can login to Figment

      Given I am on the <page> page
      When I login to Figment
      #When I change active figment pet to "random"
      When I explore <region>

      Examples:
      | page     | region     |
      | figLogin | Spookytown |

