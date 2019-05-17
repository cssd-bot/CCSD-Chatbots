##Starting at the End

**This is what I've determined to be the highest priority problem**:

  * Get students up and running with Chat-Bot development without bogging down to reinventing the fulfillment request that processes the action/parameters.
  or
  * How do we translate our Dialogflow Action/Parameters into the right queries needed to answer the provided question correctly?

**Long term goal**: Have a generic School based framework for taking Dialogflow actions/parameters and translating them into SQL. Have this design work for different School based Agents and with an extensible set of School Entities.

**Why**? This should allow students creating bots to connect their Agents to the data containing their answers without them having to fully understand this process. Get them from their initial concept for their Agent to one that can provide answers contained in a SQL database.

**Where do we want to by end of school year**? Have a framework that could manage requests with any combination of two school entities.

**How could this fail** (turn fears into questions)?
1. Not enough time with our group to come together over this problem
2. Insufficient problem solving to abstract the out the complexity for a simplified solution

##Sprint Map - map the problem.  **Translation Map**
Our map shows the 2 states with the translation problem being going from one to the other. 
* 1 for an SQL statement syntax
* 1 for an action & parameter set

Things in the action set are allowed to change before the SQL as we have flexibility here
Then introduce ways to transform the action into SQL
Break these into smaller pieces
